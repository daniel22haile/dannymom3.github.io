"use strict";



/**
 * @since March 22 / 2021
 * @author Daniel Haile
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    let max = 0;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }

    if (c > max) {
        max = c;
    }
    return max;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

/**
 * 
 * @param {Array} arr user input Array
 * @returns {number} returns the longest string in a given array
 */
function findLongestWord(arr) {
    // let longest = -Infinity;
    let longest = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}