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



// describe("sort by age", function() {
//     it("The sort of ages 25, 30, and 29 is [John, Mary, Pete]", function() {
//         let john = { name: "John", age: 25 };
//         let pete = { name: "Pete", age: 30 };
//         let mary = { name: "Mary", age: 28 };
//         let arr = [pete, john, mary];
//         sortByAge(arr);
//         assert.deepEqual(sortByAge(arr), john, mary, pete);
//     });

// });


describe("Test myMap function passed array and function", function() {
    it("Array and function triple the given array", function() {
        let input = [2, 3, 4, 6];

        function mapped(value) {
            return value * 3
        }
        assert.deepEqual(myMap(input, mapped), [6, 9, 12, 18]);
    });

});

// describe("filterRange", function() {
//     it("returns the filtered values", function() {
//         let arr = [5, 3, 8, 1];
//         let filtered = filterRange(arr, 1, 4);
//         assert.deepEqual(filtered, [3, 1]);
//     });

//     it("doesn't change the array", function() {
//         let arr = [5, 3, 8, 1];
//         let filtered = filterRange(arr, 1, 4);
//         assert.deepEqual(arr, [5, 3, 8, 1]);
//     });
// });