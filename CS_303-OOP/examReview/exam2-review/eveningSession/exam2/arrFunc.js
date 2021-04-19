"use strict";
/*eslint-disable*/
const arr = [1, 2, 3];


function myMap(arr, callback) {
    let newArr = [];
    for (let item of arr) {
        newArr.push(callback(item));
    }
    return newArr;
}

const cube = n => n * n * n;

console.log("expect: [1, 8, 27]: ", arr.map(cube));
console.log("expect: [1, 8, 27]: ", myMap(arr, cube));


function myReduce(arr, callback, initialValue) {
    if (initialValue === undefined) initialValue = 0;

    let result = initialValue;
    for (let item of arr) {
        result = callback(result, item);
    }
    return result;
}

const sum = (acc, val) => acc + val;

console.log("expect: 6: ", arr.reduce(sum, 0));
console.log("expect: 6: ", myReduce(arr, sum, 0));
console.log("expect: 6: ", myReduce(arr, sum));

function myFilter(arr, callback) {
    let newArr = [];
    for (let item of arr) {
        if (callback(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

const greaterThan2 = item => item > 2;
console.log("expect [3]:", myFilter(arr, greaterThan2));
console.log("expect [3]:", arr.filter(greaterThan2));