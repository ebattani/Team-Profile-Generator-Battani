const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const valueTest = "DU";
  const e = new Intern("Jay", 1, "testtest@test.com", valueTest);
  expect(e.school).toBe(valueTest);
});

test("getRole function should return Intern", () => {
  const valueTest = "Intern";
  const e = new Intern("Jay", 1, "testtest@test.com", "DU");
  expect(e.getRole()).toBe(valueTest);
});

test("Can get school via getSchool function", () => {
  const valueTest = "DU";
  const e = new Intern("Jay", 1, "testtest@test.com", valueTest);
  expect(e.getSchool()).toBe(valueTest);
});