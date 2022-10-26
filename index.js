// TODO: Include packages needed for this application
//import generateMarkdown from "./utils/generateMarkdown.js"; // ESM6 syntax for importing modules
const inquirer = require('inquirer'); // Load inquirer module for clean user input
const fs = require('fs'); // Load file server module for file I/O
const markdown = require('./utils/markdown.js'); // Load markdown.js class
const question = require('./utils/questions.js'); // Load questions.js class definitions
const answer = require('./utils/answer.js'); // Load answer.js class
const { mainModule } = require('process');

// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?", "Update the project description.", "Update the installation instructions.", "Update the usage information.", "Update the contribution guidelines.", "Update the test instructions", "Update the project license.", "Update the project owner GitHub user name.", "Update project owner email address."];

// TODO: Change to the keys of an answer class instance
const questionTitles = ["title", "description", "installation", "usage", "contribution", "testing", "license", "username", "email"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function askQuestions(questionObjects) {
    let answers = [];
    inquirer.prompt(questionObjects, answers)
        .then((answers) => {
            console.log(answers);
        });
}


// TODO: Create a function to initialize app
function init() {
    return new question.Questions(questions, questionTitles);
}

function main() {
    // Function call to initialize app
    let questionObjs = init();
    //console.log(questionObjs);

    askQuestions(questionObjs.questions);
}

main();

// DEV TESTING SECTION

//new inquirer.Question();