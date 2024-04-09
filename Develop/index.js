// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your repository?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project",
    },
    {
        type: "input",
        name: "userstory",
        message: "Write A User Story?",
    },

    {
        type: "checkbox",
        name: "Languages",
        message: "Which coding languages were used in this project?",
        choices:["html","CSS","javascript","node.js","java","python","C++","C#","C"
        ]
    },

    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username",
    },
  
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the main use of your project?",
    },
    {
        type: "input",  
        name: "contributors",
        message: "Who collaborated with you on this project? if None Press enter to skip",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },

    {type: "input",
    name: "email",
    message: "Enter your email address",
},

    {type: "input",
    name: "tests",
    message: "Write any tests you may have(if Applicable) and how to run them with your application",}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Readme file created successfully");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile(markdown);
    });
}

// Function call to initialize app
init();
