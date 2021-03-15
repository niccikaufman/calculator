
//multiplication
function multiply(number1, number2) {
  return number1 * number2;
}

//addition
function add(number1, number2) {
  return number1 + number2;
}

//division
function divide(number1, number2) {
  return number1 / number2;
}

//subtraction
function subtract(number1, number2) {
  return number1 - number2;
}

//convert celius to fahrenheit
function convert(number1, number2) {
  return (number1 * 9/5) + number2;
}

//convert fahrenheit to celcius
function convert2(number1, number2){
  return (number1 - number2) * 5/9;
}


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = convert2(number1, number2);
alert('The total is: ' + result + '.');


