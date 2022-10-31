const api = require("./api.js");

class Badge {
    constructor(type, name, color = "brightgreen") {
        this.type = type;
        this.name = name;
        this.color = color;
        this.img;
        //this.url;
    }
}

class BadgeAPI extends api.API {
    constructor() {
        //super(new URL("https://img.shields.io/static/v1"));
        super(new URL("https://img.shields.io/endpoint"));
        this.label;
        this.message;
        this.color;
    }

    async createBadge(...args) {
        let badge;
        if (args.length === 1 && args[0] instanceof Badge) {
            badge = args[0];
        } else if (args.length === 3) {
            badge = new Badge(args[0], args[1], args[2]);
        } else if (args.length == 2) {
            badge = new Badge(args[0], args[1]);
        } else {
            // throw error?
        }
        
        super.setSearchParameters({
            "label": badge.type, 
            "message": badge.name, 
            "color": badge.color
        });

        // console.log(this.url);
        // let response = await super.fetch();
        // console.log(response);

        badge.img = this.url;
        return badge;
    }
}

module.exports = {Badge: Badge, BadgeAPI: BadgeAPI};

// DEV TESTING SECTION
// let test = new Badge("license", "MIT", "brightgreen");
// let apiObj = new BadgeAPI();
// apiObj.createBadge(test);