"use strict";

/*
Write a function, that given two arrays representing two non-negative integers
with digits,adds the two numbers, and return it as an array.
        Input                                   Output        Explanation
        [3,4,2], [4,6,5]                       [7,0,8]         342+465=807
        [1,1], [1,2,3]                         [1,3,4]         11+123=134
        [1,1], [9,9]                           [1,1,0]         11+99=11
*/

/**
 * 
 * @param {Array} arr1 first user input array
 * @param {Array} arr2 second user input
 * @returns {Array} returns sum of elements in the form of Array
 */
function addTwo(arr1, arr2) {
    //TODO -- IN PROGRESS!
    let lengthMax = Math.max(arr1.length, arr2.length);
    let fillSum = [];

    for (let i = 0; i < lengthMax; i++) {
        fillSum.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return fillSum;
}

let temp = [3, 4, 2, 9];
let temp2 = [4, 6, 5];
console.log(addTwo(temp, temp2));