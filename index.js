class Question {
    constructor(answerType, questionName, question) {
        this.type = answerType; //editor?
        this.name = questionName;
        this.message = question;
        this.default = "string";

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

// TODO: Include packages needed for this application
// Is this right?
//import defaultExport from "generateMarkdown";
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?", "Update the project description.", "Update the installation instructions.", "Update the usage information.", "Update the contribution guidelines.", "Update the test instructions", "Update the project license.", "Update the project owner GitHub user name.", "Update project owner email address."];

const questionTitles = ["title", "description", "installation", "usage", "contribution", "testing", "license", "username", "email"];

let questionObjs = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function askQuestions() {
    // let answers = [];
    // inquirer.prompt(questions, answers)
    //     .then((answers) => {
    //         console.log(answers);
}

function generateQuestionObjects(questionList, questionTitles) {
    let objList = [];
    for (let i = 0; i < questionList.length; i++) {
        let temp = new Question("editor", questionTitles[i], questionList[i]);
        objList.push(temp);
    }
    //console.log(objList);
    return objList;
}


// TODO: Create a function to initialize app
function init() {
    questionObjs = generateQuestionObjects(questions, questionTitles);
}

// Function call to initialize app
init();

//new inquirer.Question();
