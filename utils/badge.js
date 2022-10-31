class Badge {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.img;
        this.url;
    }
}

class BadgeAPI {
    constructor(label, message, color) {
        this.url = new URL("https://img.shields.io/static/v1");
        this.label = label;
        this.message = message;
        this.color = color;
        // Query Parameters: ?label=<LABEL>&message=<MESSAGE>&color=<COLOR>"
    }
}

module.exports = {Badge: Badge, BadgeAPI: BadgeAPI};