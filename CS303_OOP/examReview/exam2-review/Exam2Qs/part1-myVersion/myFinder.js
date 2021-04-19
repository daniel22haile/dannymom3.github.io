"use strict";

function myFinder(arr, func) {

    for (let item of arr) {
        if (func(item))
            return item;
    }
    return; //item not found
}

function finder(value) {
    return value > 30; //returns the first number > 30
}
let newArr = [1, 22, 12, 33, 54];

console.log(myFinder(newArr, finder));