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
  return parseInt(numbers);
}

module.exports = add;




