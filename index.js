// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log ('ReadMe Generator');


// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name : 'title',
    message: 'What is the title of projec?'
},
{
    type: 'input',
    name : 'description',
    message: 'What is the project about?'
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install the app?'
},
{
    type: 'input',
    name: 'test',
    message: 'What command do I run to test the app?'
},
{
    type: 'input',
    name: 'usuage',
    message: 'How is the app used?'
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
},
{
    type: 'input',
    name: 'questions',
    message: 'Contact info for inquiries, Github username?'
}
    
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('./dest/READMe.md',data, function(err){
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log ("success")
        }
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answersObj) => {
        writeToFile("README.md", generateMarkdown(answersObj));
        console.log((answersObj));
        console.log(generateMarkdown(answersObj))

      })
}

// Function call to initialize app
init();
