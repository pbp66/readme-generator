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
        
    }

    generateDescriptionSection(description) {
        
    }

    generateInstallationSection(installation) {
        
    }

    generateUsageSection(usage) {
        
    }

    generateContributionSection(contribution) {
        
    }

    generateTestingSection(testing) {
        
    }

    generateQuestionsSection(questions) {
        
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

}

//module.exports = generateMarkdown;
module.exports = Markdown;