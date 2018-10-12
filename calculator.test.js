//calculator.test.js
const calculationFunctions = require('./calculator');
var add = calculationFunctions.add;
var parseStringToNumberArr = calculationFunctions.parseStringToNumberArr;


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

it("should accept only newline as delimitors", () => {
  expect(add("1\n2")).toBe(3);
})


it("should accept both ',' or newline as delimitors", () => {
  expect(add("1\n2,3")).toBe(6);
}) 

/
it("parse string of comma separated numbers correctly", () => {
  expect(parseStringToNumberArr("1,2,3")).toEqual([1,2,3]);
})

it("parse string of newline separated numbers correctly", () => {
  expect(parseStringToNumberArr("1\n2\n3")).toEqual([1,2,3]);
})

it("parse string of newline and comma separated numbers correctly", () => {
  expect(parseStringToNumberArr("1\n2,3")).toEqual([1,2,3]);
})
it("parse string of a single number to return number", () => {
  expect(parseStringToNumberArr("5")).toEqual([5]);
})

