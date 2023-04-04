// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
console.log ('ReadMe Generator');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name : 'title',
    message: 'What is the title of projec?'
},
{
    type: 'input',
    name : 'description',
    message: 'what is the project about?'
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install it?'
},
{
    type: 'input',
    name: 'test',
    message: 'what command do I run to test the app?'
},
{
    type: 'input',
    name: 'usuage',
    message: 'what is this app used for?'
},
{
    type: 'input',
    name: 'contributors',
    message: 'who contributed in this app?'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['MIT','Apache','GPL','No license']
}

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(`./dest/ReadMe.md`,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answersObj) => {
        console.log((answersObj));
        console.log(generateMarkdown(answersObj))
        writeToFile(generateMarkdown(answersObj))
      })
}

// Function call to initialize app
init();
