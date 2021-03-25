"use strict";
//const prompt = require("prompt-sync")();
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(startingValue, increment) {
    //implement this
    this.startingValue = startingValue;
    this.increment = increment;

    this.accumulate = function() {
        this.startingValue += increment;

    };

}

// let accumulator = new Accumulator(5, 10);
// accumulator.accumulate();
// accumulator.accumulate();


// console.log(accumulator.startingValue);

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
    //implement this
    this.setValues = function(a, b) {
        this.a = a;
        this.b = b;
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
};

// let calculator = new Calculator();
// calculator.setValues(20, 30);

// console.log("Sum: " + calculator.sum());
// console.log("Mul: " + calculator.mul());