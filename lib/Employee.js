// The first class is an `Employee` parent class with the following properties and
// methods:
class Employee {
    constructor(name, id, email) {
      //   * name
      this.name = name;
      //   * id
      this.id = id;
      //   * email
      this.email = email;
    }
    // methods:
    //   * getName()
    getName() {
      return this.name;
    
    }
    //   * getId()
    getId() {
      return this.id;
    }
    //   * getEmail()
    getEmail() {
      return this.email;
    }
    //   * getRole() // Returns 'Employee'
    getRole() {
      return "Employee";
    }
  }
  
  
  module.exports = Employee;