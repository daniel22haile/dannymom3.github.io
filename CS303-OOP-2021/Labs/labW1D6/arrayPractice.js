"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenAge, sumOfNums, averageNums, maxOfNums, findMaxAge, avgEvenAges, avgOddAges }; //add all of your function names here that you need for the node mocha tests

//TODO -  double array numbers
function doubleNums(arr) {
    return arr.map(num => num * 2);
}
// function doubleNums(arr) {
//     let fillMe = [];

//     for (let num of arr) {
//         fillMe.push(num * 2);
//     }
//     return fillMe;
// }

function doubleAges(arr) {
    return arr.map((element) => ({ name: element.name, age: element.age * 2 }));
}


function isEven(num) {
    if (num % 2 !== 0) return false;
    else
        return true;
}
//TODO - filter even number from array
function filterEven(arr) {
    let fillMe = [];
    for (let num of arr) {
        if (isEven(num))
            fillMe.push(num);
    }
    return fillMe;
}

//TODO - filter age over 10 years old
function filterOver10(arr) {
    let result = arr.filter((item) => item.age > 10);
    return result;
}

//TODO - find even number inside the given array
function findEvenNum(arr) {

    let result = arr.find((value, index, array) => value % 2 === 0);
    return result;

}

//TODO - find even age from the given object
function findEvenAge(arr) {
    let result1 = arr.find((item, index, array) => isEven(item.age));
    return result1;
}

//TODO - check if even number is included in the array
function includesEvenNum(arr) {
    for (let num of arr) {
        if (!isEven(num))
            return false;
    }
    return true;
}

//TODO - check if even age is included
function includesEvenAge(arr) {
    // let result = arr.some(item.age % 2 === 0);
    // return result;
}

// let user = [{ name: " dan", age: 4 }, { name: "alex", age: 5 }];
// console.log(includesEvenAge(user));


//TODO - reduce practice
//TODO - find sum of numbers

function sumOfNums(arr) {
    let result = arr.reduce((sum, value) => sum + value, 0);
    return result;
}

function averageNums(arr) {
    let result = arr.reduce((sum, current) => sum + current, 0);
    let average = result / arr.length;
    return average;
}

function maxOfNums(arr) {
    return arr.reduce((a, b) => Math.max(a, b));
}

// let Arrr = [1, 33, 255, 6];
// console.log(maxOfNums(Arrr)); //expect 255
//TODO - NB


//TODO - arr.map(function(item, index, array))
//TODO - arr.reduce(function(accumulator, item, index, array))
//TODO - arr.filter(function(item, index, array))
//TODO - arr.find(function(item, index, array))
//TODO - arr.findIndex(function(item, index, array))
//TODO - arr.forEach(function(item, index, array))

//TODO - array.includes(element, start)
//TODO - array.indexOf(item, start)
function findMaxAge(arr) {
    let result = arr.reduce((accu, item) => [{ name: item.name, age: Math.max(item.age) }]);
    return result;
}


//TODO ?? -- use a chain of map filter reduce to find the average age of people with even number ages
function avgEvenAges(arr) {
    let result = arr.map((item => item.age)
        .filter((value) => isEven(value))
        .reduce((sum, item) => sum + item, 0)) / arr.length;
    console.log(result);
}
let arrrr = [{ name: "dan", age: 28 }, { name: "alex", age: 38 }];
console.log(avgEvenAges(`The average even ages is ${arrrr}`));

//TODO ?? -- use a chain of map filter reduce to find the average age of people with odd number ages

function avgOddAges(arr) {
    let result = arr.map((item => item.age)
        .filter((value) => !isEven(value)
            .reduce((sum, item) => sum + item, 0))) / arr.length;

    console.log(result);
}

let arrrr1 = [{ name: "dan", age: 21 }, { name: "alex", age: 39 }];
console.log(avgOddAges(`The average even ages is ${arrrr1}`));