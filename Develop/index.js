// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
"Provide a short description of your project",
"What are the steps required to install your project?",
"Provide usage instructions",
"Provide contribution guidelines, if any",
"Provide test instructions, if any",
"What licensing are you using?",
"What is your GitHub username?",
"What is your email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'title',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'install',
        default:'N/A',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[4],
        default:'N/A',
        name: 'contribution',
    },
    {
        type: 'input',
        message: questions[5],
        default:'N/A',
        name: 'test',
    },
    {
        type: 'list',
        message: questions[6],
        choices: [ "MIT", "GPLv2", "Apache", "Other or None" ],
      
        name: 'license',
        
    },
    {
        type: 'input',
        message: questions[7],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },
    ])
    .then((data) =>{
     console.log(data) 
      const readmeDoc = generateMarkdown(data)

      fs.writeFile('README.md',`${readmeDoc}`,(err) =>{
          err ? console.error(err): console.log("success!")
        
      })
      
    });
  // export license
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
