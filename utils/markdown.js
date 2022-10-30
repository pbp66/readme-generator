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
        let section = "";
        let githubURL = new URL("https://github.com/");
        githubURL.pathname += username;
        
        // If input is not valid, return an empty string
        // return "";
        return `${githubURL} @ ${email}`;
    }

    generateTOC() {
        let keys = Object.keys(this);
        let toc = [];

        // TODO: Update tabs and spacing for proper format in the file
        toc = keys.filter(element => !(["title", "description"].includes(element)));
        toc = toc.map((element, index) => `${index + 1}. [${toTitleCase(element)}](#${element})\n`);
        return toc.join("");
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
            `# ${this.title}\n\n## Description\n\n${this.description}\n\n## Table of Contents\n\n${this.toc}\n\n## Installation\n\n${this.installation}\n\n## Usage\n\n${this.usage}\n\n## Credits\n\n${this.credits}\n\n## License\n\n${this.license}\n\n## How to Contribute\n\n${this.contribution}\n\n## Questions\n\n${this.questions}\n\n## Tests\n\n${this.tests}`

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
    let words = string.toLowerCase().split(" ");
    //TODO: Change using map?
    words.forEach((element, index, array)=> {
        //return element.slice(0).toUpperCase() + element.slice(1, -1);
        array[index] = element[0].toUpperCase() + element.slice(1, element.length);
    });

    return words.join(" ");
}

module.exports = {Markdown: Markdown};