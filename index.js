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
const teamArray = []; 

// TODO: Create prompts for adding a manager
const addManager = () => {
    return inquirer
        .prompt([{
                type: "input",
                message: "Who is the manager on this team?",
                name: "name",
            },
            {
                type: "input",
                message: "What is this manager's ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the office number for this manager?",
                name: "officeNumber",
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "email",
            },
            
        ])
        .then(response => {
            console.log('response', response);
            const  { name, id, officeNumber, email } = response; 
            const manager = new Manager (name, id, email, officeNumber);
    
            teamArray.push(manager); 
            console.log(manager); 
        });

} // end addManager

// TODO: Create prompts for adding an engineer

// TODO: Create prompts for adding an intern

// TODO: (Maybe) Create a function that puts it all together, basically... calling on generateHTML, and using teamArray as a key in order to "pop" the proper template literals into the correct placement within the HTML

// TODO: Call functions to initialize
addManager();

// TODO: BRAIN DUMP:
/*
    1. Does it make sense to add a series of promises and attach them to "addManager?"
    2. Should I separate the prompts and start with addManager, and then only one other single constructor called addEmployee where I add interns, engineers, etc?
    3. Is there a max # of employees I want to allow, and how do I escape out of this prompt cycle? I.e... after 1 manager, 1 intern, 1 engineer... do I add a boolean that says Add another employee yes/no?

*/