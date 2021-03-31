"use strict";





/* global assert    */
/* comment out the node specific code when going to the browser*/
// const assert = require("assert"); //always need this with node
// const myExports = require("./methods.js"); //with node need the name of your file with your functions here
// const groupById = myExports.groupById; //do this for all of the functions used in the Mocha tests
// const unique = myExports.unique;
// const filterRangeInPlace = myExports.filterRangeInPlace;
// const filterRange = myExports.filterRange;
// const Calculator = myExports.Calculator;


describe("Test myMap function passed array and function", function() {
    it("Array and function triple the given array", function() {
        let input = [2, 3, 4, 6];

        function mapped(value) {
            return value * 3
        }
        assert.deepEqual(myMap(input, mapped), [6, 9, 12, 18]);
    });

});

describe("Test myFilter function passed array and function", function() {
    it("Array and function triple the given array", function() {
        let arr = [2, 4, 3, 6, 9, 20];
        assert.deepEqual(myFilter(arr, filtered), [2, 4, 6, 20]);
    });

});

describe("Test myReduce function passed array and function", function() {
    it("Array and function triple the given array", function() {
        let inputVal = [3, 5, 20, 8, 6];
        assert.deepEqual(myReduce(inputVal, reduced, 0), 42);
    });

});