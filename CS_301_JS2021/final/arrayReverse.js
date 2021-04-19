"use strict";

function arrayReverse(arr) {
    let reversedArr = [];
    let myNum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr[myNum] = arr[i];
        myNum++;
    }
    return reversedArr;
}

let givenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayReverse(givenArr));