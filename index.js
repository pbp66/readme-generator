// Import JavaScript modules
const fs = require('fs'); // Load file system module for file I/O
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class

function writeToFile(filePath, data) {
    fs.writeFile(`${filePath}`, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

function init() {
    let titles = Object.keys(new a.Answer());
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
    return new question.Questions(questions, titles);
}

async function main() {
    // Function call to initialize app
    let filePath = "./README.md";
    let questionObjs = init();
    if (process.argv[2] != undefined) {
        filePath = process.argv[2];
    }

    let markdownContent = await questionObjs.askQuestions();
    writeToFile(filePath, markdownContent);
}

main();

// DEV TESTING SECTION
