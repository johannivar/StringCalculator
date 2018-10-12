// calculator.js

//add function
function add(numbers) {
  if(numbers == "") 
    return 0;
  
  var sum = 0;

  var intArray = parseStringToNumberArr(numbers);

  for(i = 0; i < intArray.length; i++) {
    console.log("into for-loop for the " + i + " time");
    sum+=intArray[i];
  }
  return sum;

/*
  var sd = "delimiter";
  var re = new RegExp(sd);
  var re2 = /delimiter/;
  console.log("regex: " + re2);

  numberArrayTest = numbers.split(/[\n,]+/)
  for (i = 0; i < numberArrayTest.length; i++) {
    console.log(numberArrayTest[i]);
  }

*/
/*
  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    for(i = 0; i < numberArray.length; i++) {
      if(numberArray[i].includes("\n")) 
      {
        var newLineNumbers = numberArray[i].split("\n");
        for(j = 0; j < newLineNumbers.length; j++) {
          sum += parseInt(newLineNumbers[j]);
        }
      }
      else
      {
        sum += parseInt(numberArray[i]);
      }
    }
    return parseInt(sum);
  }
  else if(numbers.includes("\n")) 
  {
    console.log("no commas, but newline symbol");
    var numberArray = numbers.split("\n");
    for(i = 0; i < numberArray.length; i++) {
      sum += parseInt(numberArray[i]);
    }
    return parseInt(sum);
  }
  return parseInt(numbers);
  */
}

function parseStringToNumberArr(fullstring) {
  
  var regex = new RegExp("[\n,]+")
  //console.log("regex: " + regex);
  var stringArray = fullstring.split(regex);

  var intArray = [];
  for (i = 0; i < stringArray.length; i++) {
    console.log("populating intArray");
    intArray[i] = parseInt(stringArray[i]);
  }
  console.log("returning intArray of length " + intArray.length);
  return intArray;
  
}



var sum = (add("5"));
console.log("sum: " + sum);

module.exports = {
  add, 
  parseStringToNumberArr
}

//module.exports = parseStringToNumberArr;




