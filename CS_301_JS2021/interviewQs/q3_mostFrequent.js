"use strict";
/*
Write a function named mostFrequent()that given an array, finds
the most frequent element in it. If there are multiple elements 
that appear maximum number of times, returnsany one of them
---------------------------------------------------------------
*/
/**
 * 
 * @param {Array} arr user input array 
 * @returns {number} returns the most frequented number in the array
 */
function mostFrequentNum(arr) {
    let mostFrequent = 0;
    let repeatedNum;
    //TODO -- DONE!
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; i++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > mostFrequent)
            mostFrequent = count;
        repeatedNum = arr[i];
    }
    return repeatedNum;
}

let newArr = [1, 2, 2, 2, 4, 6];
let answer = mostFrequentNum(newArr);
console.log(answer);