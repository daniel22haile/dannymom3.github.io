"use strict";

/*
Given an integer array nums, find the contiguous subarray (containing at least
one number) which has the largest sum and return its sum.

#maxinum_subarray
----------------------------------------------------------------------
        Input                         Output              Explanation
----------------------------------------------------------------------
      [-2,1,-3,4,-1,2,1,-5,4]          6                 [4,-1,2,1]
----------------------------------------------------------------------

   --> Initialize two integer variables: max(globalMaximumSum) and 
       currentMax(currentMaxSum) to first element in the array.
   --> Finding out currentMax by taking the maximum of arr[i] and 
       currentMax + arr[i](By doing this, while traversing the array we 
       find the maximum sum of subarray up till current position).
   --> Comparing the maximum of max(globalMaximumSum) and 
       currentMax in order to get the desired maximum sum.
*/

/**
 * 
 * @param {Array} arr user input array 
 * @returns{number} returns sum of the 
 */
function maxSubarray(arr) {

    let currentMax = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        if (currentMax > max) {
            max = currentMax;
        }
    }
    return max;
}

let givenArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(givenArr));