/**
 * adds 2 given numbers together and returns the sum
 * @param {*} a the first number input in the calculator
 * @param {*} b the second number input in the calculator
 * @returns number a + number b
 */
function add(a, b) {
  return a + b;
}

/**
 * subtracts 2 given numbers together and returns the sum
 * @param {*} a the first number input in the calculator
 * @param {*} b the second number input in the calculator
 * @returns number a - number b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * multiplies 2 given numbers together and returns the sum
 * @param {*} a the first number input in the calculator
 * @param {*} b the second number input in the calculator
 * @returns number a * number b
 */
function mulitply(a, b) {
  return a * b;
}


/**
 * divides 2 given numbers together and returns the sum
 * @param {*} a the first number input in the calculator
 * @param {*} b the second number input in the calculator
 * @returns number a / number b
 */
function divide(a, b) {
  return a / b;
}

const firstNumber = 0;
const secondNumber = 0;
const operator = "";

/**
 * This function handles the different operations that the calculator will handle
 * @param {*} operator The operation the user inputs in the calculator
 * @param {*} firstNum The first number the user inputs in the calculator
 * @param {*} secondNum The second number the user inputs in the calculator
 */
function operate(operator, firstNum, secondNum) {
  if (operator === "+") add(firstNum, secondNum);

  if (operator === "-") subtract(firstNum, secondNum);

  if (operator === "*" || operator === "x") mulitply(firstNum, secondNum);

  if (operator === "/") divide(firstNum, secondNum);
}
