const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    console.log("Success!");
    });

};

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Title of the README",
                name: "Title"
            },
            {
                type: "input",
                message: "What is an overview of the project",
                name: "Overview"
            },
            {
                type: "input",
                message: "Give a detailed description of the README",
                name: "Description"
            },
            {
                type: "input",
                message: "What are the installation instructions of the README",
                name: "Installation"
            },
            {
                type: "input",
                message: "What is the proper usuage of the README",
                name: "Usuage"
            },
            {
                type: "list",
                message: "What is the license of the README",
                name: "License",
                choices: [
                    "MIT", "Apache", "Mozilla", "Boost Software"
                ]
            },
            {
                type: "input",
                message: "Who are the contributors of the README",
                name: "Contribution"
            },
            {
                type: "input",
                message: "What is the Test of the README",
                name: "Test"
            },
            {
                type: "input",
                message: "How should we contact you with updates on questions?",
                name: "Questions"
            }

        ])
        .then(function(data) {
            const markdown = generateMarkdown(data); 
            writeToFile("readme.md", markdown);
        });


}

// function call to initialize program
init();

