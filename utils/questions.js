// Import JavaScript modules
const inquirer = require('inquirer'); // Load inquirer module for clean user input
const markdown = require('./markdown.js'); // Load markdown.js class
const a = require('./answer.js'); // Load answer.js class

class SimpleQuestion {
    constructor(question, title) {
        this.question = question;
        this.title = title;
    }
}

class Question extends SimpleQuestion {
    // Private Class Attributes
    #validate;
    #filter;
    #transformer;
    #when;
    #pageSize;
    #prefix;
    #suffix;
    #askAnswered;
    #loop;
    
    // Constructor
    constructor(question, title, answerType="input", defaultAnswer = "", choices = []) {
        super(question, title); 
        this.type = answerType; //editor launches a text editor. For basic input, use input       
        this.default = defaultAnswer; // If no answer is provided by the user, use default
        this.message = this.question; // Provided by calling super
        this.name = this.title; // Provided by calling super

        if (choices != null && choices.length > 0) {
            this.choices = choices;
            this.#pageSize = choices.length; // used with list, rawList, expand, or checkbox
        }

        if (answerType === "editor") {
            this.waitUserInput = true;
        }
    }

    getValidator() {
        return this.#validate;
    }
    
    setValidator(validator) {
        this.#validate = validator;
    }
    
    getFilter() {
        return this.#filter;
    }
    
    setFilter(filter) {
        this.#filter = filter;
    }
    
    getTransformer() {
        return this.#transformer;
    }
    
    setTransformer(transformer) {
        this.#transformer = transformer;
    }
    
    getWhen() {
        return this.#when;
    }
    
    setWhen(when) {
        this.#when = when;
    }
    
    getPageSize() {
        return this.#pageSize;
    }
    
    setPageSize(pageSize) {
        this.#pageSize = pageSize;
    }
    
    getPrefix() {
        return this.#prefix;
    }
    
    setPrefix(prefix) {
        this.#prefix = prefix;
    }
    
    getSuffix() {
        return this.#suffix;
    }
    
    setSuffix(suffix) {
        this.#suffix = suffix;
    }
    
    getAskAnswered() {
        return this.#askAnswered;
    }
    
    setAskAnswered(askAnswered) {
        this.#askAnswered = askAnswered;
    }
    
    getLoop() {
        return this.#loop;
    }

    setLoop(loop) {
        this.#loop = loop;
    }
}

class Questions {

    questions = [];

    constructor(questions = [], keys = []) {
        for (let i = 0; i < questions.length; i++) {

            if (questions[i] instanceof Question) {
                this.questions.push(questions[i]);
            } else if (questions[i] instanceof SimpleQuestion) {
                this.questions.push(new Question(questions[i].question, questions[i].title));
            } else {
                if (keys[i] != null) {
                    this.questions.push(new Question(questions[i], keys[i]));
                } else {
                    this.questions.push(new Question(questions[i], ""));
                }
            }
        }
    }

    addQuestion(question) {
        if (question instanceof SimpleQuestion) {
            this.questions.push(question);
        } else {
            let newQ = new Question(question, "");
            this.questions.push(newQ);
        }
    }

    async askQuestions() {
        const answers = await inquirer.prompt(this.questions);
        let answerObj = new a.Answer(answers);
        let newMD = new markdown.Markdown(answerObj);
        return newMD.generateMarkdown();
    }
}

module.exports = {
    SimpleQuestion: SimpleQuestion,
    Question: Question,
    Questions: Questions,
}