"use strict";

//write your own version of Array.find. write a function myFind takes two arguments
//an array and function to apply the array
//example, array = [5, 11, 1, 33];
//console.log(myFind(arr, element => element > 10));

function myFind(arr, callback) {

    for (let n of arr) {
        if (callback(n)) {
            return n;
        }
    }
    return -1;
}

function finder(n) {
    return n > 10;
}
let arr = [5, 11, 1, 33];
console.log(myFind(arr, finder));
//OR
console.log(myFind(arr, element => element > 10));