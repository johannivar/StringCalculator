//calculator.test.js
const add = require('./calculator');


//it is an alias for test, they are exactly the same
it("should return 0", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});


it("should summarize multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});


it("should accept both ',' or '\n' as delimitors", () => {
  expect(add("1\n2,3")).toBe(6);
}) 