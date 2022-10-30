// Import JavaScript modules
const fs = require('fs').promises; // Load file system module for file I/O
const path = require('path'); // Load path module
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class
const fp = require('./utils/filepath.js');

function writeToFile(filePath, data) {
    let options = {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
    };

    fs.writeFile(`${filePath}`, data, options, err => {
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
    let filePath;
    //let file;
    let questionObjs = init();
    
    filePath = new fp.FilePath(process.argv[2]);
    let markdownContent = await questionObjs.askQuestions();
    writeToFile(filePath.path, markdownContent);
}

//main();

// DEV TESTING SECTION

let filePath = new FilePath(process.argv[2]);
console.log(filePath);
console.log(__dirname);