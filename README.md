# Simple Readme Generator

## Description

User Story: As a user, I want a README generator so that I can quickly create a professional README for a new project. Given a command-line application that accepts user input, when I am prompted fo rinformation about my application repository, a high-quality, professional README.md is generated with the title of my project and sections entitled description, table of contents, installation, usage, license, contributing, tests, and questions. When I enter my project title, the README project title is updated with the user input. When I enter content for each of the sections, each section is filled with the content specified by the user. When I select a license for the project, a badge is added in the README and a notice is added within the license section. When given a GitHub username, this is added to the questions section with a link to their GitHub profile. When given an email, instructions are added to reach the repository owner at the given email address. When I click on links in the table of contents, I'm taken to the corresponding section in the README.

## Installation

From GitHub, clone the repository onto your local machine. Navigate to the install directory and run npm install. If npm is not installed, you will need to install it for your local machine first. After npm has installed the necessary modules, the program is ready to run.

## Usage

From your command-line, run node index. This will prompt the user to enter information on each of the README sections. After the prompts are complete, a README.md is generated within your current working folder. If you want to write the README file to a different folder path, call node index [Optional Folder Path]. This will generate the README.md file within the specified folder path. Additionally, if you specify a different README filename, the file will be generated with the specified name. Both the folder path and filename options can be used together: node index ["Folder Path"/"File Name.ext"

## How to Contribute

Before contributing, be sure to read the GitHub Code of Conduct found at https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md. If you have an issue, search all open issues to see if one matches the description of your issue. If not, proceed to create one providing details on the issue, errors, OS, options provided, installed node packages, etc. Issues are not assigned to anyone by the repository team. To select an issue to work on, open a pull request and generate a new branch labeled as the issue. Add your name as a contributor to the issue in question. When you make the desired changes and fixes, push all changes to your branch on the repository and submit. The repository team will review the changes. If acceptable, we will merge the changes to main and we will notify you of a successful merge or any necessary changes before a merge can take place.

## License

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen)
MIT
Copyright (c) 2022
Add license text from: https://opensource.org/licenses/mit


## Questions

Repo owner: [pbp66](https://github.com/pbp66).
For any questions, you may contact pbp66 via email: perryjames00@gmail.com. Please format your email using the following template:
- Subject: Repository - Question/Issue
- Body: Summarize the issue with a brief description for the first paragraph. Additional paragraphs can be used for a long description, if needed. Include any errors when using this project
- Signature: Please leave an email address so that any updates are sent get back to you.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [License](#license)
5. [Questions](#questions)


