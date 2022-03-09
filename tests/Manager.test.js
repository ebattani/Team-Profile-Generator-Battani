const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const valueTest = 100;
  const e = new Manager("Jay", 1, "testest@test.com", valueTest);
  expect(e.officeNumber).toBe(valueTest);
});

test('getRole() should return "Manager"', () => {
  const valueTest = "Manager";
  const e = new Manager("Jay", 1, "testest@test.com", 100);
  expect(e.getRole()).toBe(valueTest);
});

test("Can get office number via getOffice()", () => {
  const valueTest = 100;
  const e = new Manager("Jay", 1, "testest@test.com", valueTest);
  expect(e.getOfficeNumber()).toBe(valueTest);
});