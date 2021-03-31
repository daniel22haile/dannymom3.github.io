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