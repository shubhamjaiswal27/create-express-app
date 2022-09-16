import parseArgs from "minimist";
import fs from "fs";
import path from "path";

const args = parseArgs(process.argv.slice(2));

console.log(args)
args.name = args.name || "api";
args.version = args.version || "1.0.0";
args.description = args.description || "";

const WORKING_DIR = path.join(__dirname, "..", args.name);

const generatePackageJson = () => {
    const packageJson = {
        name: args.name,
        version: args.version,
        description: args.description,
        scripts: {
            build: "esbuild --bundle src/index.js --platform=node --external:./node_modules/* --outfile=build/bundle.js",
            start: "npm run build & node build/bundle.js",
            dev: "npm run watch & nodemon build/bundle.js",
            watch: "npm run build -- --watch",
            test: "mocha -r esbuild-runner/register ./tests/*.spec.js --exit"
        },
        keywords: [],
        author: "",
        license: "MIT"
    }

    fs.writeFileSync(path.join(WORKING_DIR, 'package.json'), JSON.stringify(packageJson, null, 2), { flag: 'wx' });
}

generatePackageJson();