"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { myMap, mapped };

/*
Write your own version of Array.map. Write a function, myMap(arr, fun) that takes
 an array and a function as arguments and returns a new array that is 
 formed by applying the function to each element of the array and saving the 
 result in the new array. Do not use the Array.map method in your code.
*/

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