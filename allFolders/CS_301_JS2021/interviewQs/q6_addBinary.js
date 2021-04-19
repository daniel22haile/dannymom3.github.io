"use strict";
/*
Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 and 0.
     --------------------------------------
     Input                   Output  
     -------------------------------------- 
     a="11", b="1"            "100"
     a="1010", b ="1011"      "10101"
     --------------------------------------
*/

/**
 * @author Daniel Haile
 * @param {String} bit1 bit 1 -- 0 or 1
 * @param {String} bit2 bit 2 -- 0 or 1
 * @returns {String} returns the sum of the two String bits
 */
function addBinary(bit1, bit2) {
    // Resultant string
    let result = "";
    // Indices for bit1 and bit2
    let i = bit1.length - 1;
    let j = bit2.length - 1;
    // Carry
    let carry = 0;
    while (i >= 0 || j >= 0) {
        // Sum of two bits
        let sum = carry;
        if (i >= 0) {
            sum += bit1[i--] - "0";
        }
        if (j >= 0) {
            sum += bit2[j--] - "0";
        }
        // Add the bit to the result
        result = sum % 2 + result;
        // Modify carry
        carry = parseInt(sum / 2);
    }
    // Final check if carry exists
    if (carry > 0) {
        result = 1 + result;
    }
    return result;
}

let firstBit = "1010";
let secBit = "1011";

console.log(addBinary(firstBit, secBit));