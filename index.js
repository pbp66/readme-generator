const fs = require('fs'); // Load file system module for file I/O
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class
//const { mainModule } = require('process');

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    // TODO: Update array of questions for user input. Use template questions instead?
    const questions = ["What is the title of the project?", "Update the project description.", "Update the installation instructions.", "Update the usage information.", "Update the contribution guidelines.", "Update the test instructions", "Update the project license.", "Update the project owner GitHub user name.", "Update project owner email address."];
    let titles = Object.keys(new a.Answer());
    return new question.Questions(questions, titles);
}

async function main() {
    // Function call to initialize app
    let questionObjs = init();
    let markdownContent = await questionObjs.askQuestions();
    writeToFile("README.md", markdownContent);
}

main();

// DEV TESTING SECTION
