const path = require("path");
const fs = require("fs");
const tempDir = path.resolve(__dirname, "../templates");

const render = employees => {

  const htmlPage = [];

  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => managerRender(manager))
  );
  htmlPage.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => EnginRender(engineer))
  );
  htmlPage.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => InternRender(intern))
  );

  return mainRender(htmlPage.join(""));

};

const managerRender = manager => {

  let template = fs.readFileSync(path.resolve(tempDir, "manager.html"), "utf8");

  template = replaceFun(template, "name", manager.getName());

  template = replaceFun(template, "role", manager.getRole());

  template = replaceFun(template, "email", manager.getEmail());

  template = replaceFun(template, "id", manager.getId());

  template = replaceFun(template, "officeNumber", manager.getOfficeNumber());

  return template;
};

const EnginRender = engineer => {

  let template = fs.readFileSync(path.resolve(tempDir, "engineer.html"), "utf8");
  
  template = replaceFun(template, "name", engineer.getName());
  
  template = replaceFun(template, "role", engineer.getRole());
  
  template = replaceFun(template, "email", engineer.getEmail());
  
  template = replaceFun(template, "id", engineer.getId());
  
  template = replaceFun(template, "github", engineer.getGithub());
  
  return template;
};

const InternRender = intern => {
  
  let template = fs.readFileSync(path.resolve(tempDir, "intern.html"), "utf8");
  
  template = replaceFun(template, "name", intern.getName());
  
  template = replaceFun(template, "role", intern.getRole());
  
  template = replaceFun(template, "email", intern.getEmail());
  
  template = replaceFun(template, "id", intern.getId());
  
  template = replaceFun(template, "school", intern.getSchool());
  
  return template;
};

const mainRender = htmlPage => {
  
  const template = fs.readFileSync(path.resolve(tempDir, "main.html"), "utf8");
  
  return replaceFun(template, "team", htmlPage);
};

const replaceFun = (template, placeholder, value) => {
  
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  
  return template.replace(pattern, value);
};


module.exports = render;