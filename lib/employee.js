// TODO: Create a parent constructor, but place it in a class instead
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    } // end constructor

    // returns name from command line prompt
    getName () {
        return this.name;
    }

    // returns ID from command line prompt
    getId () {
        return this.id;
    }   

    // returns email from command line prompt
    getEmail () {
        return this.email;
    }

    // returns 'Employee'
    getRole () {
        return 'Employee'; 
    }
}; // end class

// Export module
module.exports = Employee;
