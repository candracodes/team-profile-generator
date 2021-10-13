//TODO: Invoke the logic to generate team profile HTML
const generateHTML = require('./src/generateHTML');

// TODO: Invoke installed packages
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Invoke the parent class
const Employee = require("./lib/employee");

// TODO: Invoke all child classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// TODO: Create an empty array to access later

// TODO: Create prompts for adding a manager
const addManager = () => {
    return inquirer
        .prompt([{
                type: "input",
                message: "What is the manager on this team?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the office number for this manager?",
                name: "officeNumber",
            }
        ])
        .then(response => {
            console.log('response', response);
        });

} // end addManager

// TODO: Create prompts for adding an engineer

// TODO: Create prompts for adding an intern

// TODO: Call functions to initialize
addManager();