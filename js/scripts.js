function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2
}

function divide(number1, number2) {
  return number1 / number2
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//window.alert ("The sum of the equation is " + (add(number1, number2)));
//window.alert("The difference of the equation is " + (subtract(number1, number2)));
//window.alert("The product of the equation is " + (multiply(number1, number2)));
//window.alert("The dividend of the equation is " + (divide(number1, number2)));

window.alert ("The sum of the equation is " + (add(number1, number2)) + " The difference of the equation is " + (subtract(number1, number2)) + " The product of the equation is " + (multiply(number1, number2)) + " The dividend of the equation is " + (divide(number1, number2)));