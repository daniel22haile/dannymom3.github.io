"use strict";
/*
Write your own version of function map that can use to return a new array with the absolute value of each element. 

Example, 
let array =[-10, 10, 20, -20, -10, 30]
           logs [10, 10, 20, 20, 10, 30]
*/
function myMap(arr, mapFunc) {
    let fillMe = [];
    for (let item of arr) {
        if (mapFunc(item))
            fillMe.push(mapFunc(item));
    }
    return fillMe;
}

function absValue(value) {
    return Math.abs(value);
}


let newArr = [-10, 10, 20, -20, -10, 30];
console.log(myMap(newArr, absValue));