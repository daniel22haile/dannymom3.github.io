"use strict";

/*
Write a second function, power, that uses yourown version of map to return a new array
 with each element raised to the value of the exponent.  
 
 Hint: This involves a closure toaccount for the exponent since map will only provide the number argument.
 Example:
 let array = [-1, 1, 2, -2, -1, 3]
             logs [-1, 1, 8, -8, -1, 27]
*/


function myMap(arr, mapFunc) {
    let fillMe = [];
    for (let item of arr) {
        if (mapFunc(item))
            fillMe.push(mapFunc(item));
    }
    return fillMe;
}

function power(exponent) {
    return function(value) {
        return Math.pow(value, exponent);
    }
}

let array = [-1, 1, 2, -2, -1, 3]
console.log(myMap(array, power(3)));