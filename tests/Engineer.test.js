const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const valueTest = "GitHubUser";
  const e = new Engineer("Jay", 1, "testtest@test.com", valueTest);
  expect(e.github).toBe(valueTest);
});

test("getRole function should return Engineer", () => {
  const valueTest = "Engineer";
  const e = new Engineer("Jay", 1, "testtest@test.com", "GitHubUser");
  expect(e.getRole()).toBe(valueTest);
});

test("Can get GitHub username via getGithub function", () => {
  const valueTest = "GitHubUser";
  const e = new Engineer("Jay", 1, "testtest@test.com", valueTest);
  expect(e.getGithub()).toBe(valueTest);
});