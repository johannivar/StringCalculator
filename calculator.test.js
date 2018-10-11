//calculator.test.js
const add = require('./calculator');


//it is an alias for test, they are exactly the same
it("should return 0", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});