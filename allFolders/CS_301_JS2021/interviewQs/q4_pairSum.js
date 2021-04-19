"use strict";

/*
Given an array of integers, write a function that finds the pair in array
 whose sum is closest to 0. If there are more than one pair, return any pair.
 For e.g., [4,2, -1,3,-2,-3] →[2,-2]
*/
/**
 * 
 * @param {Array} arr user input array
 * @returns {Array} returns array of pair which giives the sum closest to 0
 */
function pairSum(arr) {

    //TODO -- ON PROGRESS!
    for (let i = 0; i < arr.length; i++) {
        let fillMe = [];
        let sum = 0;
        for (let j = 1; j < arr.length; j++) {
            sum += (arr[i] + arr[j]);
            fillMe.push(i, j);
        }
        if (sum === 0);

        return fillMe;
    }

}

let newArr = [4, 2, -1, 3, -2, -3];

console.log(pairSum(newArr));