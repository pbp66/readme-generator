// Import JavaScript modules
const fs = require('fs'); // Load file system module for file I/O
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

function init() {
    // TODO: Update array of questions for user input. Use template questions instead?
    const questions = [
        "Provide the project title: ", 
        "Provide the project description: ", 
        "Provide the project installation instructions: ", 
        "Provide the project usage information: ", 
        "Provide the project contribution guidelines: ", 
        "Provide the project test instructions: ", 
        "Provide the project license: ", 
        "Provide the project owner's GitHub user name: ", 
        "Provide the project owner's email address: "
    ];
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
