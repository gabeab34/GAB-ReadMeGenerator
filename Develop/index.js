// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');



// TODO: Create an array of questions for user input
const questions = [
    {

        type: 'input',
        name: 'title',
        message: 'What do you want your project to be named?'

    },
    {

        type: 'input',
        name: 'description',
        message: 'Please briefly describe your project'

    },
    {

        type: 'input',
        name: 'installation',
        message: 'Please enter any steps needed to install your project'

    },
    {

        type: 'input',
        name: 'usage',
        message: 'Please enter any needed usage information for your project'

    },
    {

        type: 'input',
        name: 'contributions',
        message: 'Please briefly state how other developers can contribute to your project'

    },
    {

        type: 'input',
        name: 'test',
        message: 'Please give testing instructions for your project'

    },
    {

        type: 'input',
        name: 'email',
        message: 'please enter your email address'

    },
    {

        type: 'input',
        name: 'github',
        message: 'Please enter your github username'

    },
    {

        type: 'input',
        name: 'licenses',
        message: 'Please enter any licenses needed for your projcet'

    },





















];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) { 
        return console.log(error)}
        else console.log("A readMe for your project has been successfully generated")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
