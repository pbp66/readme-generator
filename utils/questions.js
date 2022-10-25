class SimpleQuestion {

}

class Question extends SimpleQuestion {
    constructor(answerType, questionName, question) {
        this.type = answerType; //editor launches a text editor. For basic input, use input
        this.name = questionName;
        this.message = question;
        this.default = ""; // If no answer is provided by the user

        this.choices;
        this.validate;
        this.filter;
        this.transformer;
        this.when;
        this.pageSize;
        this.prefix;
        this.suffix;
        this.askAnswered;
        this.loop;
        this.waitUserInput = true;
    }
}