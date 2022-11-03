const fs = require('fs').promises; // Load file system module for file I/O
const path = require('path'); // Load path module

class FilePath {
    // Private Member Properties
    #defaultPath = "./README.md";
    #defaultFileName = "README.md";
    #root;
    #directory;
    #fileName;
    #name;
    #extension;
    #path;

    constructor(pathString) {
        if (isFalsy(pathString)) {
            this.#setDefaultFile();
        } else {
            this.update(pathString);
        }
    }

    async validateFilePath(pathInput) {
        this.update(pathInput);
        const dirExist = await this.validateDirectory();
        if (!dirExist) {
            await fs.mkdir(this.#directory, {recursive: true}); 
            this.buildPath(this.#directory, this.#fileName);
        }
        const properFile = this.validateFile();
        if (!properFile) {
            this.setFileName(this.#defaultFileName);
        }
        return true;
    }

    validateFile() {
        return !isFalsy(this.#extension);
    }

    async validateDirectory() {
        try {
            let fileStats = await fs.lstat(this.#path);
            if (fileStats.isDirectory()) {
                return true;
            }
        } catch (err) {
            if (err.code === "ENOENT") {
                return false;
            } else {
                console.log("Caught Error");
                console.log(err);
                this.#setDefaultFile();
                return true;
            }
        }
    }

    getRoot() {
        return this.#root;
    }

    setRoot(root) {
        this.#root = root;
        this.buildPath(this.#root, this.#directory, this.#fileName);
    }

    getDirectory() {
        return this.#directory;
    }

    setDirectory(dir) {
        this.#directory = dir;
        this.buildPath(this.#directory, this.#fileName);
    }

    getFileName() {
        return this.#fileName;
    }

    setFileName(fN) {
        this.#fileName = fN;
        this.buildPath(this.#directory, this.#fileName);
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
        this.buildPath(this.#directory, this.#name, this.#extension);
    }

    getExtension() {
        return this.#extension;
    }

    setExtension(ext) {
        this.#extension = ext;
        this.buildPath(this.#directory, this.#name, this.#extension);
    }

    async getPath() {
        await this.validateFilePath(this.#path);
        return this.#path;
    }

    async setPath(pathString) {
        return await this.validateFilePath(pathString);
    }

    update(file) {
        // path.resolve() will provide the absolute path if a relative path is specified
        let {root, dir, base, name, ext} = path.parse(path.resolve(file));
        this.#root = root;
        this.#directory = dir;
        this.#fileName = base;
        this.#name = name;
        this.#extension = ext;

        if (isFalsy(ext)) {
            this.#directory += `/${this.#name}`;
            this.#fileName = "";
            this.#name = "";
            this.#extension = "";
        }

        this.buildPath(this.#directory, this.#fileName);
    }

    buildPath(...paths) {
        this.#path = path.join(...paths);
    }

    #setDefaultFile() {
        this.update(this.#defaultPath);
    }
};

function isFalsy(boolStatement) {
    const falsyValue = [false, null, undefined, 0, -0, 0n, NaN, ""];
    return falsyValue.includes(boolStatement);
}

module.exports = {FilePath: FilePath};