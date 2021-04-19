"use strict";
/*
Given an array of integers nums and an integer target,
 return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, 
  and you may not use the same element twice.
   You can return the answer in any order.

   Input                                       Output
   nums =[2,7,11,15], target = 9            [0,1], because nums[0]+nums[1]==9
   nums = [2,3,4], target = 6               [0,2]
   nums=[3,3], target = 6                   [0,1]

*/

/**
 * 
 * @param {Array} arr user input array 
 * @param {number} target is a number which is the sum of the two indexed value
 * @returns {array} index in the form of array 
 */
function addTwo(arr, target) {
    //TODO -- DONE!
    for (let i = 0; i < arr.length; i++) {
        let row = [];
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                row.push(i, j);
            }

        }

        return row;
    }

}


let nums = [2, 7, 11, 15];

console.log(addTwo(nums, 13));