// console.log('Hello World');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


console.log("Enter information for each team member");
console.log("--------------------------------------");

let team = [];

// console.log("You've made it to the team");

const questionsForEmployees = [
  //employee name
  {
    type: "input",
    message: "What is the name of the the employee?",
    name: "name"
  },
  //employee id
  {
    type: "input",
    message: "What is the id of the employee?",
    name: "id"
  },
  //employee email
  {
    type: "input",
    message: "What is the email of the employee?",
    name: "email"
  },
  //get roll of employee
  {
    type: "list",
    message: "What is the role of the employee?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"]
  }
];

// console.log("You've made it past the employee question array");

const questionForEngineer = {
  // when: choice => {
  //     return choice.role == "engineer"
  // },
  type: "input",
  message: "What is your GitHub username?",
  name: "github"
};


//when intern
const questionForIntern = {
  // when: choice => {
  //     return choice.role == "intern"
  // },
  type: "input",
  message: "What is the name of your school?",
  name: "school"
};

// console.log("QFI");

//when manager
const questionForManager = {
  // when: choice => {
  //     return choice.role == "manager"
  // },
  type: "input",
  message: "What is your office number?",
  name: "officeNumber"
};
// console.log("QFM");

//check if more team members
const askForMoreEmployees = {
  type: "confirm",
  name: "addMore",
  message: "Do you have any more team members you'd like to add?",
  default: false
};

// console.log("check employees");

//create async function to check if user added more employees
async function checkForMoreEmployees() {
  try {
    const checkForMore = await inquirer.prompt(askForMoreEmployees);
    if (checkForMore.addMore) {
      await createTeam();
    }
    return team;
  } catch (err) {
    console.log("There is an error in the checkForMoreEmployees Function");
  }
}

//create another asyn funtion that creates the team by pushing the new constructor into empty team array
async function createTeam() {
  try {
    const inputFromUsers = await inquirer.prompt(questionsForEmployees);
    const { name, id, email } = inputFromUsers;
    //use switch and break
    switch (inputFromUsers.role) {
      //case for engineer
      case "Engineer":
        try {
          const engineerInput = await inquirer.prompt(questionForEngineer);
          const { github } = engineerInput;
          let engineer = new Engineer(name, id, email, github);
          team.push(engineer);
          await checkForMoreEmployees();
        } catch (err) {
          console.log("Error for the engineer");
        }
        break;
      //case for intern
      case "Intern":
        try {
          const internInput = await inquirer.prompt(questionForIntern);
          const { school } = internInput;
          let intern = new Intern(name, id, email, school);
          team.push(intern);
          await checkForMoreEmployees();
        } catch (err) {
          console.log("Error for the intern");
        }
        break;
      //case for manager
      case "Manager":
        try {
          const managerInput = await inquirer.prompt(questionForManager);
          const { officeNumber } = managerInput;
          let manager = new Manager(name, id, email, officeNumber);
          team.push(manager);
          await checkForMoreEmployees();
        } catch (err) {
          console.log("Error for the manager");
        }
        break;
    }
    //catch
  } catch (err) {
    console.log("Error!");
  }
}

// console.log("wow, much far");
//async function
async function mainHTML() {
  //waits til createTeam function is ready
  await createTeam();


//check if file does not exist by checking with fs
  if (!fs.existsSync("./output")) {
    console.log("outputting");
    //if does not exit - create directory folder 'output'
    fs.mkdirSync("./output");
  }
  //write to file
  //use parameters var outputPath, the render team function passing
  //the array team, and the anon callback function err
  fs.writeFile(outputPath,  render(team), error => {
    if (error) throw error;
    console.log("You have successfully generated your new team");
    console.log("---------------------------------------------");
  });
}
//call mainHTML function and return promise/ catch
mainHTML()
  .then(() => console.log("Please check the output folder for your team.html"))
  .catch(error => console.log(error));