"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, copySorted, getAverageAge, sortByAge }; //add all of your function names here that you need for the node mocha tests

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}
//   let arr = [5, 3, 8, 1];
//   let filtered = filterRange(arr, 1, 4);
//   console.log( filtered ); // 3,1 (matching values)
//   console.log( arr ); // 5,3,8,1 (not modified)

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
//   let arr = [5, 3, 8, 1];
//   filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
//   console.log( arr ); // [3, 1]

/*
Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.

    First, implement the method calculate(str) that takes a string like "1 + 2" in the format
     “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
    Second, Then add the method addMethod(name, func) that teaches the calculator a new operation. 
        It takes the operator name and the two-argument function func(a,b) that implements it.
*/
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

/*
Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   console.log( unique(strings) ); // Hare, Krishna, :-O


function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

/*-----------copy and sort array---------------- */
function copySorted(arr) {
    return arr.slice().sort();
}

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

/*
Write the function getAverageAge(users) that gets an array of objects with 
property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
*/
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// console.log(getAverageAge(arr)); // 28

/*
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.
*/
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);

/*-------sorted by age-------------
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// sortByAge(arr);

// now sorted is: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

/*
Write the code to create another array from it, of objects with id and fullName, where
 fullName is generated from name and surname.
*/
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith