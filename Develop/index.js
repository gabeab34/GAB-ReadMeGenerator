// TODO: Include packages needed for this application
// const inquirer = import('inquirer');
// const fs = import('fs');
import fs from 'fs'
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';



// TODO: Create an array of questions for user input
const questions = [
    {

        type: 'input',
        name: 'title',
        message: 'What do you want your project to be named?',
        default: 'my project',

    },
    {

        type: 'input',
        name: 'description',
        message: 'Please briefly describe your project',
        default: 'this is my project',

    },
    {

        type: 'input',
        name: 'installation',
        message: 'Please enter any steps needed to install your project',

    },
    {

        type: 'input',
        name: 'usage',
        message: 'Please enter any needed usage information for your project',

    },
    {

        type: 'input',
        name: 'contributions',
        message: 'Please briefly state how other developers can contribute to your project',

    },
    {

        type: 'input',
        name: 'test',
        message: 'Please give testing instructions for your project',

    },
    {

        type: 'input',
        name: 'email',
        message: 'please enter your email address',

    },
    {

        type: 'input',
        name: 'github',
        message: 'Please enter your github username',

    },
    {

        type: 'list',
        name: 'license',
        message: 'Please enter any licenses needed for your project',
        choices: ['APM', 'CPAN', 'CTAN', 'Gitlab', 'none'],
    }

];
    

// TODO: Create a function to write README file
function writeToFile(fileName, readMe) {
    fs.writeFile(fileName, readMe, error => {
        if (error) { 
        return console.log(error)}
        else console.log("A readMe for your project has been successfully generated")
    });
}

// TODO: Create a function to initialize app
async function init() {
    
        const userAnswers = await inquirer.prompt(questions);
        console.log("Your responses: ", userAnswers);
    
        const generateReadMe = generateMarkdown(userAnswers);

        writeToFile(`${userAnswers.title}.md`, generateReadMe);


    
    
};

// Function call to initialize app
init();
// inquirer.prompt(questions)