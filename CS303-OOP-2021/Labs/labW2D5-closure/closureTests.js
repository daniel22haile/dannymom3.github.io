"use strict";
/* global require */

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
// const assert = require("assert"); //always need this with node
// const myExports = require("./closure.js"); //with node need the name of your file with your functions here
// const sum = myExports.sum; //do this for all of the functions used in the Mocha tests
// const makeArmy = myExports.makeArmy;
// const byField = myExports.byField;

describe("filter a number between two values", function() {
    it("sum a given number utill one using recursion", function() {



            assert.deepEqual(sum(2)(1)), 3;
        })
        // it("Filter array in array", function() {
        //     assert.deepEqual(myFilterArra(arr, [1, 2, 11], inArray), [1, 2])
        // })

})