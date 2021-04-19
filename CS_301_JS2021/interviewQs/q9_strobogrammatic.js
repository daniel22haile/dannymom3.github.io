"use strict";
/*
A strobogrammatic number is a number that looks the same when rotated 180 degree (looked upside down)
Write a function to determine if a number is strobogrammatic.
 The number is represented as string.
 #strobogrammatic_number
        --------------------------------
         Input                    Output
         --------------------------------
         69                      true
         101                     true
         88                      true
         868                     false
         --------------------------------
 */
function strobogrammatic(num) {

    if (num !== 0 || num !== 1 || num !== 6 || num !== 8 || num !== 9) {
        return false;
    } else {
        return true;
    }
}
let nums = 8;
console.log(strobogrammatic(nums));