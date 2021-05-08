"use strict";

function sum(arr) {
    return sumHelper(arr, 0);
}

function sumHelper(arr, i) {
    if (arr.length === i)
        return i;
    // let result = sumHelper(arr, i + 1)
    // return result + arr[i]
    return arr[i] + sumHelper(arr, i + 1);
}
console.log(sum([1, 2, 3, 4, 5]));