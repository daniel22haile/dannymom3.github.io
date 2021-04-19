"use strict";
/*
count the digits of a given number
---------------------------------------------------------------------
*/

/**
 * 
 * @param {number} nums user input number digits
 * @return {number} returns the number of digits that user was entered 
 */
function countDigits(nums) {
    if (nums === 0) {
        return 0;
    } else if (nums === 1) {
        return 1;
    } else {
        let lastDigit = nums % 10;
        let firstDigit = 0;
        while (nums > 9) {
            firstDigit = nums;
            firstDigit = (nums / 10);
        }
        return lastDigit + firstDigit;
    }
}
// function countDigits(nums) {
//     if (nums === 0) {
//         return 0;
//     } else if (nums === 1) {
//         return 1;
//     } else {
//         return 1 + countDigits(Math.floor(nums / 10));
//     }
// }

let myDigits = 1456;
console.log(countDigits(myDigits)); //10