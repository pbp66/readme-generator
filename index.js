// TODO: Include packages needed for this application
// Is this right?
//import defaultExport from "generateMarkdown";
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?", "Update the project description.", "Update the installation instructions.", "Update the usage information.", "Update the contribution guidelines.", "Update the test instructions", "Update the project license.", "Update the project owner GitHub user name.", "Update project owner email address."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    console.log("\n");
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i]);
    }
    console.log("\n");
}

// Function call to initialize app
init();
