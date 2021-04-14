"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
module.exports = { Accumulator }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {

    //IMPLEMENT THIS

    this.initialValue = initialValue;

    this.read = function() {
        this.initialValue += increment;
    };
}

let accumulator = new Accumulator(0, 3);
accumulator.read();
accumulator.read();

console.log(accumulator.initialValue);