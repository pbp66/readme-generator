class Markdown {
    constructor(dataToRender) {
        this.title = this.generateTitleSection(dataToRender.title);
        this.description = this.generateDescriptionSection(dataToRender.description);
        this.installation = this.generateInstallationSection(dataToRender.installation);
        this.usage = this.generateUsageSection(dataToRender.usage);
        this.contribution = this.generateContributionSection(dataToRender.contribution);
        this.testing = this.generateTestingSection(dataToRender.testing);
        this.license = this.generateLicenseSection(dataToRender.license);
        this.questions = this.generateQuestionsSection(dataToRender.username, dataToRender.email);
        //this.credits = this.generateCreditsSection(dataToRender);
        this.toc = this.generateTOC();

        this.generateMarkdown();
    }

    generateTitleSection(title) {
        let valid = this.#isValidString(title);
        if (valid)  {
            return toTitleCase(title);
        }

        // If input is not valid, return an empty string
        return "";
    }

    generateDescriptionSection(description) {
        let valid = this.#isValidString(description);

        // If input is not valid, return an empty string
        return "";
    }

    generateInstallationSection(installation) {
        let valid = this.#isValidString(installation);

        // If input is not valid, return an empty string
        return "";
    }

    generateUsageSection(usage) {
        let valid = this.#isValidString(usage);

        // If input is not valid, return an empty string
        return "";
    }

    generateContributionSection(contribution) {
        let valid = this.#isValidString(contribution);

        // If input is not valid, return an empty string
        return "";
    }

    generateTestingSection(testing) {
        let valid = this.#isValidString(testing);

        // If input is not valid, return an empty string
        return "";
    }

    generateQuestionsSection(username, email) {
        let valid = this.#isValidString();

        // If input is not valid, return an empty string
        return "";
    }

    generateTOC() {
        
    }

    generateCreditsSection() {

    }
    
    generateLicense(license) {
        this.#renderLicenseBadge();
        this.#renderLicenseLink();
        this.#renderLicenseSection();
    }

    generateMarkdown() {
        let markdown = 
        `
        # ${this.title}

        ## Description
        
        ${this.description}
        
        ## Table of Contents
        
        ${this.toc}
        
        ## Installation
        
        ${this.installation}
        
        ## Usage
        
        ${this.usage}

        ## Credits
        
        ${this.credits}
        
        ## License
        
        ${this.license}
        
        ## Features
        
        If your project has a lot of features, list them here.
        
        ## How to Contribute

        ${this.contribution}
        
        ## Tests
        
        ${this.testing}
        `

        return markdown;
    }

    // If there is no license, return an empty string
    #renderLicenseBadge(license) { 

    }

    // If there is no license, return an empty string
    #renderLicenseLink(license) { 

    }

    // If there is no license, return an empty string
    #renderLicenseSection(license) { 
        
    }

    #isValidString(string) {
        return string instanceof String;
    }
}

function toTitleCase(string) {
    let newString = "";
    let words = string.toLowerCase().split(" ");
    words.forEach(element => {
        return element.slice(0).toUpperCase() + element.slice(1, -1);
    });

    return words.join(" ");
}

//module.exports = generateMarkdown;
module.exports = Markdown;