#!/bin/bash

set -e

# INPUT_NAME=api
# delete the project directory if it already exists
rm -rf $INPUT_NAME

echo $INPUT_NAME
echo "this directory"
pwd

# create the project directory
mkdir $INPUT_NAME



echo "input directory"
ls -la

# generate package.json
npm start -- --name="${INPUT_NAME}"

# change into the project directory
cd $INPUT_NAME

echo "pwd directory"
pwd
# install dependencies
npm install --save body-parser express
npm install --save-dev dotenv mocha chai esbuild supertest esbuild-runner nodemon

# create the .gitignore file
echo "node_modules" >> .gitignore
echo "build" >> .gitignore

rm -rf node_modules

cp -r ../templates/* .