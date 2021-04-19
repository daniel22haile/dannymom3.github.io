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


describe("get average age", function() {
    it("The average age of 25, 30, and 29 is 28", function() {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 29 };

        let arr = [john, pete, mary];
        assert.deepEqual(getAverageAge(arr), 28);
    });

});
/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
describe("filterRange", function() {
    it("returns the filtered values", function() {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function() {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(arr, [5, 3, 8, 1]);
    });
});

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
describe("filterRangeInPlace", function() {
    it("returns the filtered values", function() {
        let arr = [5, 3, 8, 1];
        filterRangeInPlace(arr, 1, 4);
        assert.deepEqual(arr, [3, 1]);
    });

    it("doesn't return anything", function() {
        assert.equal(filterRangeInPlace([1, 2, 3], 1, 4), undefined);
    });
});

/* 
Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.  (see https://javascript.info/array-methods)
*/
describe("Calculator", function() {
    let calculator;

    before(function() {
        calculator = new Calculator();
    });

    it("calculate(12 + 34) = 46", function() {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate(34 - 12) = 22", function() {
        assert.equal(calculator.calculate("34 - 12"), 22);
    });

    it("add multiplication: calculate(2 * 3) = 6", function() {
        calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("add power: calculate(2 ** 3) = 8", function() {
        calculator.addMethod("**", (a, b) => a ** b);
        assert.equal(calculator.calculate("2 ** 3"), 8);
    });
});

/* Create a function unique(arr) that should return an array with unique items of arr. */
describe("unique", function() {
    let strings = ["Haile", "Danny", "Haile", "Danny",
        "Danny", "Danny", "Haile", "Haile", ":-O"
    ];
    it("tests unique hare Danny Haile", function() {
        assert.deepEqual(unique(strings), ["Haile", "Danny", ":-O"]);
    });
});


/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/
describe("groupById", function() {

    it("creates an object grouped by id", function() {
        let users = [
            { id: 'john', name: "John Smith", age: 20 },
            { id: 'ann', name: "Ann Smith", age: 24 },
            { id: 'pete', name: "Pete Peterson", age: 31 },
        ];

        assert.deepEqual(groupById(users), {
            john: { id: 'john', name: "John Smith", age: 20 },
            ann: { id: 'ann', name: "Ann Smith", age: 24 },
            pete: { id: 'pete', name: "Pete Peterson", age: 31 },
        });
    });

    it("works with an empty array", function() {
        const users = [];
        assert.deepEqual(groupById(users), {});
    });
});

/* let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/
describe("copySorted", function() {
    it("get the sorted array back", function() {
        let arr = ["HTML", "JavaScript", "CSS"];
        let sorted = copySorted(arr);
        assert.deepEqual(sorted, ["CSS", "HTML", "JavaScript"]);
    });
    it("have not changed original", function() {
        let arr = ["HTML", "JavaScript", "CSS"];
        let sorted = copySorted(arr);
        assert.deepEqual(arr, ["HTML", "JavaScript", "CSS"]);
    });
});