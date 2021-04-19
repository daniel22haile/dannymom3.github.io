"use strict";
/*
Given an array containing n distinct numbers taken from 0,1,2,...,n, find the one that is missing from the array.

#missing_number
      ----------------------------------------
      Input                    Output
      ----------------------------------------
      [3,0,1]                    2
      [9,6,4,2,3,5,7,0,1]        8
      [0]                        1
      ----------------------------------------
*/
/**
 * 
 * @param {Array} arr user input array
 * @param {number} num range of the number 
 * @returns {number} returns the missing number
 */
function getMissingNo(arr, num) {

    let total = Math.floor((num + 1) * (num + 2) / 2);
    for (let i = 0; i < num; i++)
        total -= arr[i];
    return total;
}

let arr = [];
let myNum = arr.length;
let miss = getMissingNo(arr, myNum);
console.log(miss);