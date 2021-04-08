"use strict";

function myReduce(arr, redFunc, init) {
    let result = init;
    for (let item of arr) {
        result = redFunc(result, item);
    }
    return result;
}

function reducer(accum, value) {
    return accum + value;
}

let newArr = [1, 2, 3, 4, 5, 6];
console.log(myReduce(newArr, reducer, 0));