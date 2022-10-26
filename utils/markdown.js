class Markdown {
    constructor(dataToRender) {
        this.title = this.generateTitleSection(dataToRender.title);
        this.description = this.generateDescriptionSection(dataToRender.description);
        this.installation = this.generateInstallationSection(dataToRender.installation);
        this.usage = this.generateUsageSection(dataToRender.usage);
        this.contribution = this.generateContributionSection(dataToRender.contribution);
        this.tests = this.generateTestsSection(dataToRender.testing);
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
        if (valid) {
            return description;
        }

        // If input is not valid, return an empty string
        return "";
    }

    generateInstallationSection(installation) {
        let valid = this.#isValidString(installation);
        if (valid) {
            return installation;
        }
        
        // If input is not valid, return an empty string
        return "";
    }

    generateUsageSection(usage) {
        let valid = this.#isValidString(usage);
        if (valid) {
            return usage;
        }

        // TODO: Add images automatically? or video content?
        
        // If input is not valid, return an empty string
        return "";
    }

    generateContributionSection(contribution) {
        let valid = this.#isValidString(contribution);
        if (valid) {
            return contribution;
        }
        
        // If input is not valid, return an empty string
        return "";
    }

    generateTestsSection(testing) {
        let valid = this.#isValidString(testing);
        if (valid) {
            return testing;
        }
        
        // If input is not valid, return an empty string
        return "";
    }

    generateQuestionsSection(username, email) {
        // let validUsername = this.#isValidString(username);
        // let validEmail = this.#isValidString(email);
        // if (valid) {

        // }
        
        // If input is not valid, return an empty string
        // return "";
        return `${username} @ ${email}`;
    }

    generateTOC() {
        let keys = Object.keys(this);
        let toc = keys.filter(element => {
            if (!(["title", "description"].includes(element))) {
                return `[${toTitleCase(element)}](#${element}\n)`;
            }
        });
        return toc;
    }

    generateCreditsSection() {
        // TODO: Generate collaborators based on repo contributions. GitHub API?
    }
    
    generateLicenseSection(license) {
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
        //console.log(`input (${string}) is an instance of String: ${typeof string}`)
        return (typeof string) === "string";
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
module.exports = {Markdown: Markdown};