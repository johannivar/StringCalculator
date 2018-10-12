// calculator.js

//add function
function add(numbers) {
  if(numbers == "") 
    return 0;

  var sum = 0;

  var intArray = parseStringToNumberArr(numbers);
  var negNumbers = getNegatives(intArray);
  
  if(negNumbers.length) {
    throw ("Negatives not allowed: " + negNumbers);
  } 

  for(i = 0; i < intArray.length; i++) {
    if(intArray[i] <= 1000) {
      sum+=intArray[i];
    }
  }
  return sum;

}

function parseStringToNumberArr(fullstring) {
  
  var regex = new RegExp("[\n,]+")
  //console.log("regex: " + regex);
  var stringArray = fullstring.split(regex);

  var intArray = [];
  for (i = 0; i < stringArray.length; i++) {
    //console.log("populating intArray");
    intArray[i] = parseInt(stringArray[i]);
  }
  //console.log("returning intArray of length " + intArray.length);
  return intArray;
  
}

function getNegatives(integerArr) {
  var negatives = [];
  for (i = 0; i < integerArr.length; i++) {
    if(integerArr[i] < 0) {
      negatives.push(integerArr[i]);
    }
  }

  return negatives;
}


//var negs = getNegatives([-1,-2,3]);
//console.log("negatives: " + negs);
/*
var sum = (add("-1,-2,-3"));
console.log("sum: " + sum);
*/
module.exports = {
  add, 
  parseStringToNumberArr,
  getNegatives
}

//module.exports = parseStringToNumberArr;




