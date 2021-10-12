// TODO: INVOKE EMPLOYEE (THE PARENT CLASS)
const Employee = require('./employee');

// TODO: CREATE ENGINEER CLASS THAT EXTENDS EMPLOYEE PARENT CLASS
class Engineer extends Employee {

    constructor (name, id, email, github) {

        // reference key elements from the parent class as a way to cross-reference the constructor parameters
        super (name, id, email);

        // introduce a new method for retrieving engineer's github username
        this.github = github; 
    } // end constructor

    // returns github username from command line prompt 
    getGithub () {
        return this.github;
    } 

    // overridden to return 'Engineer'
    getRole () {
        return "Engineer";
    }

}; // end class

// TODO: export module
module.exports = Engineer;
