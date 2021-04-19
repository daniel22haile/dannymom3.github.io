"use strict";

const prompt = require("prompt-sync")();
/*
A porcupine number is a prime number whose last digit is 9 and the 
next prime number that follows it also ends with the digit 9.
 For example,139 is a porcupine number because:
         a.it is a prime
         b.it ends in a 9
         c.The next prime number after it is 149 which also ends in 9.
Write a function named findPorcupineNumber which takes an integer 
argument n and returns the first porcupine number that is greater
than n.So findPorcupineNumber(0)would return 139 (because 139 
happens to be the first porcupine number) and so would findPorcupineNumber(138). 
But findPorcupineNumber(139)would return 409 which is the second porcupine number.
*/


/**
 * 
 * @param {number} number user input to check the porcupine number
 * @returns {boolean} returns 
 */
function findPorcupineNumber(number) {
    //TODO -- ON PROGRESS!
    for (let i = 0; i >= number; i++) {

    }

}

/**
 * 
 * @param {number} num user input number to check for prime or not
 * @returns {boolean} returns true if the number is prime, otherwise return false
 */
function isPrime(num) {
    if (num === 0 || num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

}