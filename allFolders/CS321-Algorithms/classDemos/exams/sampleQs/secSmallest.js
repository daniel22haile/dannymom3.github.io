"use strict";

function secondSmallest(arr) {
    let smallest = 0;
    let secondSmallest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];

        } else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

let newArr1 = [1, 2, 3, -5, -100, -12222];
let answer3 = secondSmallest(newArr1);
console.log(answer3);