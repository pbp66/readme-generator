class Question {
    constructor() {
        this.type;
        this.name;
        this.message;
        this.choices;
    }
}

// TODO: Include packages needed for this application
// Is this right?
//import defaultExport from "generateMarkdown";
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?", "Update the project description.", "Update the installation instructions.", "Update the usage information.", "Update the contribution guidelines.", "Update the test instructions", "Update the project license.", "Update the project owner GitHub user name.", "Update project owner email address."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

function askQuestions() {
    // let answers = [];
    // inquirer.prompt(questions, answers)
    //     .then((answers) => {
    //         console.log(answers);
    //     });
}

// Function call to initialize app
init();
