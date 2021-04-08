"use strict";


function myReduce(arr, redFunc, init) {
    let accumuletor = init;
    for (let item of arr) {
        accumuletor = redFunc(accumuletor, item);
    }
    return accumuletor;
}

function reducer(accum, value) {
    return accum + value;
}

let myArr = [1, 2, 3, 4, 5];

console.log(myReduce(myArr, reducer, 0));