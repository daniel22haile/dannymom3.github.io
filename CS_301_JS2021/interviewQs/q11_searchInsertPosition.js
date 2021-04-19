"use strict";
/*
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
     
       input                         output
       -------------------------------------
       [1, 3, 5, 6], 5                 2
       [1, 3, 5, 6], 2                 1
       [1, 3, 5, 6], 7                 4
       [1, 3, 5, 6], 0                 0
       --------------------------------------
*/

function getValWithIndx(arr, target) {
    arr.sort();



    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        } else {
            return arr[arr.length - 1] + 1;
        }
    }
}

let givenArr = [1, 3, 5, 6];
console.log(getValWithIndx(givenArr, 7));