// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    default: "N/A",
  },
  {
    type: "input",
    message: "Provide usage instructions",
    default: "N/A",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide contribution guidelines, if any",
    default: "N/A",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide test instructions, if any",
    default: "N/A",
    name: "test",
  },
  {
    type: "list",
    message: "What licensing are you using?",
    choices: ["MIT", "GPLv2", "Apache", "Other or None"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];
//creates a function that runs the inquirer package and collects the input, then writes it using writeToFile()
function userPrompts() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Creates a function to write README file
function writeToFile(fileName, data) {
  const readmeDoc = generateMarkdown.generateMarkdown(data);

  fs.writeFile(fileName, `${readmeDoc}`, (err) => {
    err
      ? console.error(err)
      : console.log("You've successfully created a README file!");
  });
}

// Creates a function to initialize app
function init() {
  userPrompts();
}

// Function call to initialize app
init();
