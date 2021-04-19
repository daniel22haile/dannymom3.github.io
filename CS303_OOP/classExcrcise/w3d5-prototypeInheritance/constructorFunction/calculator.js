"use strict";


function Calculator(number1, number2) {
    this.num1 = number1;
    this.num2 = number2
}

Calculator.prototype.add = function() {
    return this.num1 + this.num2;
}

Calculator.prototype.substract = function() {
    return this.num1 - this.num2;
}

Calculator.prototype.multiply = function() {
    return this.num1 * this.num2;
}

Calculator.prototype.divide = function() {
    return this.num1 / this.num2;
}

const calc = new Calculator(10, 10);

console.log(calc.add());
console.log(calc.substract());
console.log(calc.multiply());
console.log(calc.divide());




// Calculator.prototype = {
//     constructor: Calculator
// };

const cal = Object.create(Calculator.prototype);
cal.constructor(5, 5);
console.log(cal.add());