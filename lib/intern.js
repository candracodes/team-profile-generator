// TODO: INVOKE EMPLOYEE (THE PARENT CLASS)
const Employee = require('./employee');

// TODO: CREATE INTERN CLASS
class Intern extends Employee  {
    
    constructor (name, id, email, school) {
        // reference key elements from the parent class as a way to cross-reference the constructor parameters
        super (name, id, email); 

        // introduce a new property for retrieving intern's github school info
        this.school = school; 
    }

    // returns school info from command line prompt 
    getSchool () {
        return this.school;
    }

    // overridden to return 'Intern'
    getRole () {
        return "Intern";
    }
} // end class

// TODO: export module
module.exports = Intern;
