// Import JavaScript modules
const fs = require('fs').promises; // Load file system module for file I/O
const path = require('path'); // Load path module
const q = require('./utils/questions.js'); // Load questions.js class definitions
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
    let questions = [];
    let template = "Provide the project";
    const sections = [
        {section: "title", default: path.parse(__dirname).name},
        {section: "description", default: ""},
        {section: "installation instructions", default: ""},
        {section: "usage information", default: ""},
        {section: "contribution guidelines", default: ""},
        {section: "test instructions", default: "No Tests Provided"},
        {section: "license", default: "MIT"},
        {section: "project owner's GitHub user name", default: ""},
        {section: "project owner's email address", default: ""}
    ];

    for (let i = 0; i < sections.length; i++) {
        questions.push(new q.Question(`${template} ${sections[i].section}: `, titles[i], "input", sections[i].default));
    }

    return new q.Questions(questions);
}

async function main() {
    let filePath = new fp.FilePath(process.argv[2]);
    let questionObjs = init();
    let file = await filePath.getPath();
    let data = await questionObjs.askQuestions();
    writeToFile(file, data);
}

main();

// DEV TESTING SECTION