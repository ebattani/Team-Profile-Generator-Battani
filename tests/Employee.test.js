const Employee = require("../lib/Employee");

test("Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor", () => {
  const name = "Jane";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor", () => {
  const valueTest = 100;
  const e = new Employee("Jay", valueTest);
  expect(e.id).toBe(valueTest);
});

test("Can set email via constructor", () => {
  const valueTest = "testtestest@test.com";
  const e = new Employee("Jay", 1, valueTest);
  expect(e.email).toBe(valueTest);
});

test("Can get name via getName function", () => {
  const valueTest = "Jane";
  const e = new Employee(valueTest);
  expect(e.getName()).toBe(valueTest);
});

test("Can get id via getId function", () => {
  const valueTest = 100;
  const e = new Employee("Jay", valueTest);
  expect(e.getId()).toBe(valueTest);
});

test("Can get email via getEmail function", () => {
  const valueTest = "testtestest@test.com";
  const e = new Employee("Jay", 1, valueTest);
  expect(e.getEmail()).toBe(valueTest);
});

test("getRole function should return Employee", () => {
  const valueTest = "Employee";
  const e = new Employee("Jane", 1, "testtestest@test.com");
  expect(e.getRole()).toBe(valueTest);
});