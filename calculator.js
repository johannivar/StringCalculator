// calculator.js

//add function
function add(numbers) {
  if(numbers == "") 
    return 0;
  
  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    //console.log("numberArray has length " + numberArray.length);
    var sum = 0;
    for(i = 0; i < numberArray.length; i++) {
      console.log("number: '" + numberArray[i] + "'");

      if(numberArray[i].includes("\n")) 
      {
        console.log("number " + numberArray[i] + " includes newline");
        console.log("'" + numbers[i] + "' includes newline");
        var newLineNumbers = numberArray[i].split("\n");
        console.log("newLineNumbers = " + newLineNumbers);
        for(j = 0; j < newLineNumbers.length; j++) {
          console.log("adding" + newLineNumbers[j]);
          sum += parseInt(newLineNumbers[j]);
        }
      }
      else
      {
        console.log("adding" + numberArray[i]);
        sum += parseInt(numberArray[i]);
      }
      
    }

    return parseInt(sum);
  }

  return parseInt(numbers);
  
  
}

var sum = add("1\n2,3");
console.log("sum = " + sum);

module.exports = add;




