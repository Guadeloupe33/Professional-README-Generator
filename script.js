// TODO: Include packages needed for this application\
const inquirer = require ('inquirer');
const fs = require('fs');
const generateReadMe = ( {project, description, install, usage, contribution, license}) =>
`# <Project-Title:${project} >



## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description]
- [Install]
- [Usage]
- [Contribution]
- [License]

## Description:${description}

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Installation: ${install}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage: ${usage}

Provide instructions and examples for use. Include screenshots as needed.


## Credits

List your collaborators

## License
`

// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt(  [
    {
        type: 'input',
        message: 'What is the name of your project Name of project ?',
        name: ' project',
    },

    {
        type: 'input',
        message: 'What is the description of your project? ',
        name: ' description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: ' install',
    },
    {
        type: 'input',
        message: 'Please provide some usage information? ',
        name: ' usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines? ',
        name: ' contribution',
    },
    {
        type: 'checkbox',
        message: 'Please select a license:',
        name: ' license',
        choices: [ 
            {
             name: 'BSD',
             value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' ,  
            },
            {
                name:'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            },
            {
                name:'GPL',
                value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            }

            
            ],
    },
])
.then( (response)=> {
    console.log( response);
    fs.writeFile('readMe.txt', JSON.stringify(response),(err) =>
    err ? console.error(err) : console.log('sucess !'))
}
);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();