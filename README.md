# Evaluate a news article with Natural Language Processing: Project Description

This project is a introduction to the topic of Natural Language Processing, the ability of machines to interpret human language. The goal is to create a website that use Natural Language Processing(NPL) to evaluate news article via the URL address of the article.

## Content
### Webpack:
The build tool for this project is webpack, an open-source JavaScript module bundler.

### HTML: 
The project contains a static HTML page (index.html) in the src/client/views folder.

### SASS:
The website is styles with SASS. The .scss files contained in the src/client/styles folder will be converted to css by webpack via the sass-loader.

### JS:
The Javascript files on the client side is located in the src/client/js folder and the Javascript files on the server side is located in the src/server folder.

### API
The API for NPL is [MeaningCloud](https://www.meaningcloud.com).

### Node.js and Express
The server is set up using `express` from node.js and `npm` (package manager for Node.js packages) can be used to install the dependencies for the project (`npm install`).

### dotenv
dotenv needs to be installed to use enviroment variables. The `.env` file is located in the root directory and it contains the api key provided by the MeaningCloud API

## Running the App
1. run `npm run prod` and `npm run start` on the terminal

