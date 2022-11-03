const lic = require("./license.js");
const badge = require("./badge.js");

class Markdown {

    #order;
    markdown = "";

    constructor(dataToRender) {
        this.title = this.generateTitleSection(dataToRender.title);
        this.description = this.generateDescriptionSection(dataToRender.description);
        this.installation = this.generateInstallationSection(dataToRender.installation);
        this.usage = this.generateUsageSection(dataToRender.usage);
        this.contribute = this.generateContributionSection(dataToRender.contribution);
        this.tests = this.generateTestsSection(dataToRender.tests);
        this.license = this.generateLicenseSection(dataToRender.license);
        this.questions = this.generateQuestionsSection(dataToRender.username, dataToRender.email);
        this.credits = this.generateCreditsSection(dataToRender);
        this.toc = this.generateTOC();
    }

    generateTitleSection(title) {
        let valid = this.#isValidString(title);
        if (valid)  {
            return `# ${toTitleCase(title)}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    generateDescriptionSection(description) {
        let valid = this.#isValidString(description);
        if (valid) {
            return `## Description\n\n${description}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    generateTOC() {
        /*
        this.#order = [
            this.title, 
            this.description, 
            this.toc, 
            this.installation, 
            this.usage, 
            this.credits, 
            await this.license, 
            this.contribute, 
            this.tests, 
            this.questions
        ];
        */
        let toc = ["installation", "usage", "credits", "license", "contribute", "tests", "questions"];
        toc = toc.filter(element => this[element] != "");
        toc = toc.map((element, index) => `${index + 1}. [${toTitleCase(element)}](#${element})\n`);

        // If the markdown file is empty except for title and description, generate no TOC
        if (toc.length === 0) {
            return "";
        }
        return `## Table of Contents\n\n${toc.join("")}\n\n`;
    }

    generateInstallationSection(installation) {
        let valid = this.#isValidString(installation);
        if (valid) {
            return `## Installation\n\n${installation}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    generateUsageSection(usage) {
        let valid = this.#isValidString(usage);
        if (valid) {
            // TODO: Add images automatically? or video content?
            return `## Usage\n\n${usage}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    generateCreditsSection(credits) {
        // TODO: Generate collaborators based on repo contributions. GitHub API?
        let valid = this.#isValidString(credits);
        if (valid) {
            return '## Credits\n\n${credits}\n\n'
        }
        // If input is not valid, return an empty string
        return "";
    }

    async generateLicenseSection(licenseInput) {
        if (this.#isValidString(licenseInput)) {
            let license = await this.#getLicense(licenseInput);
            let licenseBadge = await this.#getLicenseBadge(license);
            let licenseLink = `![License](${licenseBadge.img})`;
            let licenseSection = `${licenseLink}

${license.id}

Copyright (c) ${new Date().getFullYear()}

Add license text from: ${license.text[0].url}
`;
            return `## License\n\n${licenseSection}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    generateContributionSection(contribution) {
        let valid = this.#isValidString(contribution);
        if (valid) {
            return `## How to Contribute\n\n${contribution}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    generateQuestionsSection(username, email) {
        let section = "";
        let githubURL = "";
        if (username != "") {
            githubURL = new URL("https://github.com/");
            githubURL.pathname += username;
            section = `Repo owner: [${username}](${githubURL}).\n`;
        }
        if (email != "") {
            section += `For any questions, you may contact ${username} via email: ${email}. Please format your email using the following template:

- Subject: Repository - Question/Issue
- Body: Summarize the issue with a brief description for the first paragraph. Additional paragraphs can be used for a long description, if needed. Include any errors when using this project
- Signature: Please leave an email address so that any updates are sent get back to you.`;
        }

        if (this.#isValidString(section)) {
            return `## Questions\n\n${section}\n\n`;
        }
        return "";
    }

    generateTestsSection(testing) {
        let valid = this.#isValidString(testing);
        if (valid) {

            return `## Tests\n\n${testing}\n\n`;
        }
        // If input is not valid, return an empty string
        return "";
    }

    async generateMarkdown() {
        await this.generateOrder();
        return this.#order.join("");
    }

    async generateOrder() {
        this.#order = [
            this.title, 
            this.description, 
            this.toc, 
            this.installation, 
            this.usage, 
            this.credits, 
            await this.license, 
            this.contribute, 
            this.tests, 
            this.questions
        ];
    }

    // TODO: Allow user to specify color? Randomly generate color?
    async #getLicenseBadge(license) { 
        let licenseBadge = new badge.Badge("license", license.id);
        const badgeAPI = new badge.BadgeAPI();
        return await badgeAPI.createBadge(licenseBadge);
    }

    async #getLicense(licenseInput) { 
        const licenseAPI = new lic.LicenseAPI();
        return await licenseAPI.getLicense(licenseInput);
    }

    #isValidString(str) {
        //console.log(`input (${string}) is an instance of String: ${typeof string}`)
        return (((typeof str) === "string") && (str != ""));
    }
}

function toTitleCase(string) {
    let words = string.toLowerCase().split(" ");
    //TODO: Change using map?
    words.forEach((element, index, array)=> {
        //return element.slice(0).toUpperCase() + element.slice(1, -1);
        array[index] = element[0].toUpperCase() + element.slice(1, element.length);
    });

    return words.join(" ");
}

module.exports = {Markdown: Markdown};