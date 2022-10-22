// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'email',
        messgae: 'What is your Email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application:',
      
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please describe how to install the application:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of your application'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, if any:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what did you use to test?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick which license to use:',
        choices: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'CC0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'The Hippocratic Licesnse 2.1', 'IGM Public License Version 1.0', 'ISC License', 'The MIT License', 'None']
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('Gen-README.md', generateMarkdown(answers) , (err) => 
//     err ? console.error(err) : console.log(data)
// );
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('Gen-README.md', generateMarkdown(answers) , (err) => 
        err ? console.error(err) : console.log(answers)
    );
        console.log(generateMarkdown(answers));
  
    });
};

// Function call to initialize app
init();
