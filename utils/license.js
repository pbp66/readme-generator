
const axios = require("axios");
const api = require("./api.js");

class License {
    constructor(id = "", name = "", superseded = "", keywords = [], identifiers = [], links = [], otherNames = [], text = []) {
        this.id = id;// OSI Identifier
        this.name = name;// Name of the License
        this.supersededBy = superseded; // OSI Identifier of the licenses that supersedes this license
        this.keywords = keywords;// List of text keywords that describe this license
        this.identifiers = identifiers;// List of identifier objects for this license
        this.links = links// List of link objects for this license
        this.otherNames = otherNames;// List of other_name objects for this license
        this.text = text; // List of text objects for this license
    }
}

class LicenseAPI extends api.API {
    constructor(baseURL = "https://api.opensource.org") {
        super(baseURL);

        // TODO: How to handle errors generated by license not found error?
    }

    async getAll() {
        this.url.pathname = `licenses`;
        let response = await super.fetch();
        let licenseList = [];
        for (let i = 0; i < response.length; i++) {
            licenseList.push(generateLicenseObjects(response[i]));
        }
        return licenseList;
    }

    async getLicense(type) {
        this.url.pathname = `license/${type}`;
        const response = await super.fetch();
        return generateLicenseObjects(response);
    }

    async getLicenseByKeyword(keyword) {
        this.url.pathname = `license/${keyword}`;
        return await super.fetch();
    }
}

class Identifier {
    constructor(id, scheme) {
        this.identifier = id;
        this.scheme = scheme;
    }
}

class Link {
    constructor(note, strUrl) {
        this.note = note;
        this.url = new URL(strUrl);
    }
}

class OtherName {
    constructor(name, note) {
        this.name = name;
        this.note = note;
    }
}

class Text {
    constructor(media, title, strUrl) {
        this.mediaType = media;
        this.title = title;
        this.url = new URL(strUrl);
    }
}

function generateLicenseObjects(response) {
    const responseKeys = Object.keys(response);
    let tempLicense = new License();
    for (const key of responseKeys) {
        let objectKey = snakeCaseToCamelCase(key);
        switch (key) {
            case "identifiers":
                for (const obj of response[key]) {
                    tempLicense[objectKey].push(new Identifier(obj.identifier, obj.scheme));
                }
                break;
            case "links":
                for (const obj of response[key]) {
                    tempLicense[objectKey].push(new Link(obj.note, obj.url));
                }
                break;
            case "other_names":
                for (const obj of response[key]) {
                    tempLicense[objectKey].push(new OtherName(obj.name, obj.note));
                }
                break;
            case "text":
                for (const obj of response[key]) {
                    tempLicense[objectKey].push(new Text(obj.media_type, obj.title, obj.url));
                }
                break;
            default:
                tempLicense[objectKey] = response[key];
        }
    }
    return tempLicense;
}

function snakeCaseToCamelCase(str) {
    if (str === "") {
        return str;
    }
    const strings = str.toLowerCase().split("_");
    if (strings.length === 1) {
        return str;
    } else {
        let newString = [];
        for (let i = 0; i < strings.length; i++) {
            if (i >= 1) {
                // Capitalize word
                newString.push(capitalizeWord(strings[i]));
            } else {
                newString.push(strings[i]);
            }
        }
        return newString.join("");
    }
}

function capitalizeWord(str) {
    let newStr = str.split("");
    newStr[0] = newStr[0].toUpperCase();
    return newStr.join("");
}

module.exports = { License: License, LicenseAPI: LicenseAPI };

// DEV TESTING SECTION
async function test() {
    let lic = new LicenseAPI();
    let response = await lic.getLicense("MIT");
    console.log(response);
}

async function test2() {
    let lic = new LicenseAPI();
    let response = await lic.getAll();
    console.log(response);
}

//test();
//test2();