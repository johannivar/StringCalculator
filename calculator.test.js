//calculator.test.js
const calculationFunctions = require('./calculator');
var add = calculationFunctions.add;
var parseStringToNumberArr = calculationFunctions.parseStringToNumberArr;
var getNegatives = calculationFunctions.getNegatives;


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
});


it("should accept both ',' or newline as delimitors", () => {
  expect(add("1\n2,3")).toBe(6);
}); 


it("parse string of comma separated numbers correctly", () => {
  expect(parseStringToNumberArr("1,2,3")).toEqual([1,2,3]);
});

it("parse string of newline separated numbers correctly", () => {
  expect(parseStringToNumberArr("1\n2\n3")).toEqual([1,2,3]);
});

it("parse string of newline and comma separated numbers correctly", () => {
  expect(parseStringToNumberArr("1\n2,3")).toEqual([1,2,3]);
});

it("parse string of a single number to return number", () => {
  expect(parseStringToNumberArr("5")).toEqual([5]);
});

//getNegatives function test
it("should return an empty array if no negatives", () => {
  expect(getNegatives("1,2,3")).toEqual([]);
});

it("should return an array of the negative numbers if any", () => {
  expect(getNegatives([-1,-2,3])).toEqual([-1,-2]);
});

it("should throw error if negative numbers ", () => {
  function checkNegs() {
    add("-1,-2,-3");
  }
  expect(checkNegs).toThrow("Negatives not allowed: -1,-2,-3");
}); 

it("should throw error if negative and positive numbers ", () => {
  function checkNegs() {
    add("2,-4,5,-6");
  }
  expect(checkNegs).toThrow("Negatives not allowed: -4,-6");
}); 

it("should ignore numbers > 1000", () => {
  expect(add("1001,2")).toBe(2);
});


it("parse string with custom delimiter correctly", () => {
  expect(parseStringToNumberArr("//;\n1;2;3")).toEqual([1,2,3]);
});

it("parse string with custom delimiter and commas correctly", () => {
  expect(parseStringToNumberArr("//;\n1;2,3")).toEqual([1,2,3]);
});

it("parse string with custom delimiter and newline symbols correctly", () => {
  expect(parseStringToNumberArr("//;\n1;2\n3")).toEqual([1,2,3]);
});

it("parse string with custom delimiter, commas and newline symbols correctly", () => {
  expect(parseStringToNumberArr("//;\n1;2\n3,4,5\n6")).toEqual([1,2,3,4,5,6]);
});



/*
it("should use ; as delimitor", () => {
  expect(add("//;\n1;2")).toBe(3)

});*/

