"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { myMap, mapped, myFilter, filtered, myReduce, reduced };

/*
Write your own version of Array.map. Write a function, myMap(arr, fun) that takes
 an array and a function as arguments and returns a new array that is 
 formed by applying the function to each element of the array and saving the 
 result in the new array. Do not use the Array.map method in your code.
*/
//TODO - Write your own version of map.
function myMap(arr, fun) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fun(arr[i]))
    }
    return newArr
}

function mapped(value) {
    return value * 3
}

// let input = [2, 3, 4, 6];
// console.log(myMap(input, mapped)) //[6, 9, 12, 18]
//TODO - Write your own version of filter.
function myFilter(arr, func) {
    let filtArr = [];
    for (let i = 0; i < arr.length; i++) {
        let value = func(arr[i]);
        if (value) {
            filtArr.push(func(arr[i]))
        }

    }
    return filtArr;
}

function filtered(value) {
    if (value % 2 === 0) {
        return value;
    }
}

let arr = [2, 4, 3, 6, 9, 20];
console.log(myFilter(arr, filtered)) //[2, 4, 6, 20]

//TODO - Write your own version of reduce.

function myReduce(arr, redFunc, init) {

    let accum = init;
    for (let i = 0; i < arr.length; i++) {
        accum = redFunc(accum, arr[i])
    }

    return accum
}

function reduced(accum, value) {
    return accum + value;
}

let inputVal = [3, 5, 20, 8, 6];
console.log(myReduce(inputVal, reduced, 0)) // 42