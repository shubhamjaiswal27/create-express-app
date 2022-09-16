#!/bin/bash

set -e

# delete the project directory if it already exists
rm -rf $INPUT_NAME

# create the project directory
mkdir $INPUT_NAME

PACKAGEJSON=$(cat <<-EOM
{
    "name": "${INPUT_NAME}",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "build": "esbuild --bundle src/index.js --platform=node --external:./node_modules/* --outfile=build/bundle.js",
        "start": "npm run build & node build/bundle.js",
        "dev": "npm run watch & nodemon build/bundle.js",
        "watch": "npm run build -- --watch",
        "test": "mocha -r esbuild-runner/register ./tests/*.spec.js --exit"
    },
    "keywords": [],
    "author": "",
    "license": "MIT"
}
EOM
)

echo "$PACKAGEJSON" > $INPUT_NAME/package.json

# change into the project directory
cd $INPUT_NAME

# install dependencies
npm install --save body-parser express
npm install --save-dev dotenv mocha chai esbuild supertest esbuild-runner nodemon

# create the .gitignore file
echo "node_modules" >> .gitignore
echo "build" >> .gitignore

rm -rf node_modules

cp -r /templates/* .