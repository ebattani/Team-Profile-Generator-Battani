// In addition to `Employee`'s properties and methods, `Intern` will also have:
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    //   * school
    this.school = school;
  }
  //   * getSchool()
  getSchool() {
    return this.school;
  }
  //   * getRole() // Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;