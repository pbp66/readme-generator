// Import JavaScript modules
const fs = require('fs').promises; // Load file system module for file I/O
const path = require('path'); // Load path module
const question = require('./utils/questions.js'); // Load questions.js class definitions
const a = require('./utils/answer.js'); // Load answer.js class

class FilePath {
    // Private Member Properties
    #defaultPath = "./README.md";
    #root;
    #directory;
    #fileName;
    #name;
    #extension;

    // Public Member Properties
    path;

    constructor(pathString) {
        if ((pathString == null) || (pathString === "")) {
            this.update(this.#defaultPath);
        }

        this.update(pathString);
    }

    validFile() {

    }

    validDirectory() {

    }

    getRoot() {
        return this.#root;
    }

    setRoot(root) {
        this.#root = root;
        this.buildPath(this.#root, this.#directory, this.#fileName);
    }

    getDirectory() {
        return this.#directory;
    }

    setDirectory(dir) {
        this.#directory = dir;
        this.buildPath(this.#directory, this.#fileName);
    }

    getFileName() {
        return this.#fileName;
    }

    setFileName(fN) {
        this.#fileName = fN;
        this.buildPath(this.#directory, this.#fileName);
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
        this.buildPath(this.#directory, this.#name, this.#ext);
    }

    getExtension() {
        return this.#extension;
    }

    setExtension(ext) {
        this.#extension = ext;
        this.buildPath(this.#directory, this.#name, this.#ext);
    }

    update(file) {
        let {root, dir, base, name, ext} = path.parse(file);
        
        this.#root = root;
        this.#directory = dir;
        this.#fileName = base;
        this.#name = name;
        this.#extension = ext;
        this.buildPath(dir, base);
    }

    buildPath(...paths) {
        this.path = path.join(...paths);
    }

    #defaultFile() {
        this.updateFile(this.#defaultPath);
    }
}

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
    
    // Error checking within FilePath Class. Do not need conditional below
    // if (process.argv[2] != null) {
    //     file = process.argv[2];
    // } else {
    //     file = "./README.md";
    // }

    //filePath = new FilePath(file);
    filePath = new FilePath(process.argv[2]);
    let markdownContent = await questionObjs.askQuestions();
    writeToFile(filePath.path, markdownContent);
}

main();

// DEV TESTING SECTION
