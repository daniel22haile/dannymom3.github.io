"use strict";

function removeDup(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    let result = newArr.sort();
    return result;
}

let array = [1, 3, 3, 4, 2, 2, 5, 6];
console.log(removeDup(array));