function Calculator() {
  this.add = function add(a, b) { return a + b; };

  this.subtract = function subtract(a, b) { return a - b; };

  this.multiply = function multiply(a, b) { return a * b; };

  this.divide = function divide(a, b) { return a / b; };
}

export default Calculator;