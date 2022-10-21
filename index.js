// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application:',
      
    },
    {
        type: 'checkbox',
        message: 'What sections do you want to include in your table of contents?',
        name: 'table',
        choices: ['installation', 'Usage', 'Credits', 'License'],
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data , (err) => 
    err ? console.error(err) : console.log(data)
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
  
    });
};

// Function call to initialize app
init();








