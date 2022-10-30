class FilePath {
    // Private Member Properties
    #defaultPath = "./README.md";
    #root;
    #directory;
    #fileName;
    #name;
    #extension;

    // Public Member Properties
    path;

    constructor(pathString) {
        if ((pathString == null) || (pathString === "")) {
            this.#defaultFile();
        } else {
            this.update(pathString);
            this.validateFile(); // TODO: Refactor code as validateFile will overwrite the original path if no file is provided. Call validate directory first?
            this.validateDirectory();
        }
    }

    validateFile() {
        // If provided file has no extension, specify default filename
        if (!this.#extension) {
            this.#defaultFile();
        }
    }

    async validateDirectory() {
        // Does directory path exist in file system?
        // fs.access(this.path, error => )
        // If so, do nothing. Else, create the directories
        try {
            let fileStats = await fs.lstat(this.path);
            if (fileStats.isDirectory()) {
                this.#defaultFile();
            }
        } catch (err) {
            if (err.code === "ENOENT") {
                console.log(this.#directory);
                await fs.mkdir(this.#directory, {recursive: true}); // TODO: If no file is passed, this.#base will store a folder. this.#base is needed for the complete path
                this.buildPath(this.#directory, this.#fileName);
            } else {
                console.log(err);
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

    update(file) {
        // path.resolve() will provide the absolute path if a relative path is specified
        let {root, dir, base, name, ext} = path.parse(path.resolve(file));
        console.log({root, dir, base, name, ext});
        this.#root = root;
        this.#directory = dir;
        this.#fileName = base;
        this.#name = name;
        this.#extension = ext;
        this.buildPath(dir, base);
    }

    buildPath(...paths) {
        this.path = path.join(...paths);
    }

    #defaultFile() {
        this.update(this.#defaultPath);
    }
}

module.exports = {FilePath: FilePath};