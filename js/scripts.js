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

//window.alert("The sum of the equation is " + (add(number1, number2)));
//window.alert("The difference of the equation is " + (subtract(number1, number2)));
//window.alert("The product of the equation is " + (multiply(number1, number2)));
//window.alert("The dividend of the equation is " + (divide(number1, number2)));

//window.alert ("The sum of the equation is " + (add(number1, number2)) + " The difference of the equation is " + (subtract(number1, number2)) + " The product of the equation is " + (multiply(number1, number2)) + " The dividend of the equation is " + (divide(number1, number2)));

const addition = number1.toString() + " + " + number2.toString() + " = " + add(number1,number2).toString();
const subtraction = number1.toString() + " - " + number2.toString() + " = " + subtract(number1, number2).toString();
const multiplication = number1.toString() + " * " + number2.toString() + " = " + multiply(number1, number2).toString();
const division = number1.toString() + " / " + number2.toString() + " = " + divide(number1, number2).toString();

window.alert (addition + "\n" + subtraction + "\n" + division + "\n" + multiplication);