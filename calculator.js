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
  if (fullstring.substring(0,2) == "//") {
    var cusDelimStartIndex = 2;
    var cusDelimEndIndex = fullstring.indexOf("\n");
    var cusDelim = fullstring.substring(cusDelimStartIndex, cusDelimEndIndex);
    fullstring = fullstring.substring(3+cusDelim.length);
  }
  var regex = new RegExp("[\n,]+")

  var stringArrayCusDelim = fullstring.split(cusDelim);

  var stringArray = [];
  for (i = 0; i < stringArrayCusDelim.length; i++) {
    var tmpArr = stringArrayCusDelim[i].split(regex);
    for (j = 0; j < tmpArr.length; j++) {
      stringArray.push(tmpArr[j]);
    }
  }

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


var sum = (add("//hahaha\n2,3\n4hahahan5,6"));
console.log("sum: " + sum);

module.exports = {
  add, 
  parseStringToNumberArr,
  getNegatives
}

//module.exports = parseStringToNumberArr;




