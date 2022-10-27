// Import JavaScript modules
const fs = require('fs').promises; // Load file system module for file I/O
const path = require('path'); // Load path module
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class

class FilePath {
    // Private Member Property
    #defaultPath = "./README.md";
    
    // Public Member Properties
    filePath;
    directory;
    fileName;
    extension;

    constructor(pathString) {
        this.#setFile(path.resolve(pathString)); // Do I need further verification?
    }

    validFile() {

    }

    validDirectory() {

    }

    #setFile(file) {
        this.filePath = file;
        this.directory = path.dirname(file);
        this.fileName = path.basename(file);
        this.extension = path.extname(file);
    }

    #defaultFile() {
        this.#setFile(this.#defaultPath);
    }
}

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
    let file, filePath;
    let questionObjs = init();
    
    if (process.argv[2] != null) {
        file = process.argv[2];
    } else {
        file = "./README.md";
    }
    
    filePath = new FilePath(file);
    let markdownContent = await questionObjs.askQuestions();
    writeToFile(filePath, markdownContent);
}

main();

// DEV TESTING SECTION
