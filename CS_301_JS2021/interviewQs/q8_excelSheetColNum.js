"use strict";
/*
Given a column title as appear in an excel sheet, return its corresponding column number.
#excel_sheet_column_number

       Input                       Output 
       ------------------------------------
       A                            1
       AB                          28
       ZY                          701
       ------------------------------------
 */

/**
 * 
 * @param {String} arr containing an alphabet
 * @returns {number} returns the number where the aplphabets are located
 */
function titleToNumber(arr) {
    // alphabet is a string, but basically converts to a number in base 26 
    // also instead of zero we have 26 
    const dict = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    };
    let number = 0;
    let power = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        number += Math.pow(26, power) * dict[arr[i]];
        power++;
    }
    return number;
}
let myLetter = 'ZY';
console.log(titleToNumber(myLetter));


//Method -2

/**
 * @param {string} myString alphabett
 * @return {number} returns number
 */
function titleToNumber2(myString) {
    let result = 0;

    for (let i = 0; i < myString.length; i++) {
        result *= 26;
        result += ((myString.charCodeAt(i) - 'A'.charCodeAt(0)) + 1);
    }

    return result;
}

let myLetter2 = 'AB';
console.log(titleToNumber2(myLetter2));