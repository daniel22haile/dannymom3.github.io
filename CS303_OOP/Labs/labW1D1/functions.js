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
function findLongestWord(str) {
    let longestWord = str[0];
    //Method 1
    // for (let word of str) {
    //     if (word.length > longestWord.length) {
    //         longestWord = word;
    //     }
    // }

    //OR Method 2
    for (let i = 1; i < str.length; i++) {
        if (str[i].length > longestWord.length)
            longestWord = str[i];
    }
    return longestWord;
}



/**
 * 
 * @param {Array} arr user input array 
 * @returns {array} returns a reversed user input array
 */
function reverseArray(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

/**
 * 
 * @param {Array} arr user input array 
 * @returns {array} returns a reversed user input array inplace
 */
function reverseArrayInPlace(arr) {
    let i = 0; //declare i outside the while loop
    let j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

function scoreExams(studentAnswer, correctAnswers) {
    let score = []
    for (let eachAnswer of studentAnswer) {
        let answer = 0
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === correctAnswers[i])
                answer++;
        }
        score.push(answer)
    }
    return score;
}