// calculator.js

//add function
function add(numbers) {
  console.log("testing: " + numbers);
  if(numbers == "") 
    return 0;
  
  var sum = 0;

  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    //console.log("numberArray has length " + numberArray.length);
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
      console.log("number: '" + numberArray[i] + "'");
      console.log("adding " + numberArray[i]);
      sum += parseInt(numberArray[i]);
    }
    return parseInt(sum);
  }


  return parseInt(numbers);
}

var sum = (add("1\n2"));
console.log("sum: " + sum);

module.exports = add;




