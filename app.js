const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

let team = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outPut = path.join(OUTPUT_DIR, "team.html");


const questions = [

  {

    type: "input",
    message: "What is the employee name?",
    name: "name"

  },
  
  {

    type: "input",
    message: "What is the employee ID?",
    name: "id"

  },

  {

    type: "input",
    message: "What is the employee email?",
    name: "email"

  },

  {

    type: "list",
    message: "What is the the employee role?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"]

  }
];


const engineerQuestion = {

  type: "input",
  message: "Please enter Github username. No @ necessary.",
  name: "Github"

};

const internQuestions = {

  type: "input",
  message: "Please enter school name.",
  name: "school"

};


const managerQuestions = {

  type: "input",
  message: "Please enter office number.",
  name: "number"

};

const addEmployees = {

  type: "confirm",
  name: "addMore",
  message: "Do you have more employees to add?",
  default: false

};

async function addEmployeeFun() {

  try {

    const checkForMore = await inquirer.prompt(addEmployees);

    if (checkForMore.addMore) {

      await createTeam();

    }

    return team;
    
  } catch (err) {

    console.log("There is an error in the addEmployeeFun Function");

  }
}

//create another asyn funtion that creates the team by pushing the new constructor into empty team array
async function createTeam() {

  try {

    const userInput = await inquirer.prompt(questions);
    const { name, id, email } = userInput;


    switch (userInput.role) {

      case "Engineer":

        try {

          const engineerInput = await inquirer.prompt(engineerQuestion);
          const { github } = engineerInput;

          let engineer = new Engineer(name, id, email, github);

          team.push(engineer);

          await addEmployeeFun();

        } catch (err) {

          console.log("Error");
        }
  
      case "Intern":

        try {

          const internInput = await inquirer.prompt(internQuestions);
          const { school } = internInput;
          
          let intern = new Intern(name, id, email, school);

          team.push(intern);

          await addEmployeeFun();

        } catch (err) {

          console.log("Error");

        }
        
        break;

      case "Manager":

        try {

          const managerInput = await inquirer.prompt(managerQuestions);
          const { number } = managerInput;

          let manager = new Manager(name, id, email, number);

          team.push(manager);

          await addEmployeeFun();

        } catch (err) {

          console.log("Error");

        }

        break;
    }

  } catch (err) {

    console.log("Error!");
  }
}

async function mainHTML() {

  await createTeam();

  if (!fs.existsSync("./output")) {

    fs.mkdirSync("./output");

  }
  //write to file
  //use parameters var outPut, the render team function passing
  //the array team, and the anon callback function err
  fs.writeFile(outPut,  render(team), error => {

    if (error) throw error;

  });
}

//call mainHTML function and return promise/ catch
mainHTML()

  .then(() => console.log("Please check the output folder for your team.html"))
  .catch(error => console.log(error));