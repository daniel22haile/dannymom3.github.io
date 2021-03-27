"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge }; //add all of your function names here that you need for the node mocha tests

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
    return arr.includes((item) => isEven(item.age));
}