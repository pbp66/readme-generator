const inquirer = require('inquirer'); // Load inquirer module for clean user input
const fs = require('fs'); // Load file server module for file I/O
const markdown = require('./utils/markdown.js'); // Load markdown.js class
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class
//const { mainModule } = require('process');

class Test {

}



function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

function askQuestions(questionObjects) {
    let answers = [];
    inquirer.prompt(questionObjects, answers)
        .then((answers) => {
            let answerObj = new a.Answer();
            Object.assign(answerObj, answers);
            let newMD = new markdown.Markdown(answerObj);
            let markdownContent = newMD.generateMarkdown()           
            writeToFile("README.md", markdownContent);
        });
}

// TODO: Create a function to initialize app
function init() {
    // TODO: Update array of questions for user input. Use template questions instead?
    const questions = ["What is the title of the project?", "Update the project description.", "Update the installation instructions.", "Update the usage information.", "Update the contribution guidelines.", "Update the test instructions", "Update the project license.", "Update the project owner GitHub user name.", "Update project owner email address."];
    let titles = Object.keys(new a.Answer());
    return new question.Questions(questions, titles);
}

function main() {
    // Function call to initialize app
    let questionObjs = init();
    //console.log(questionObjs);

    askQuestions(questionObjs.questions);
}

main();

// DEV TESTING SECTION
