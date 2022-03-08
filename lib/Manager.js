// In addition to `Employee`'s properties and methods, `Manager` will also have:
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    //   * officeNumber
    this.officeNumber = officeNumber;
  }
  //methods:
  // * getOffice()
  getOfficeNumber(){
    return this.officeNumber;
  }


  //   * getRole() // Overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;