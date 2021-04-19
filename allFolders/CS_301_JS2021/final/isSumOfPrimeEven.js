"use strict";

/*
Write a JavaScript function isSumOfPrimesEven that takes an array of positive 
integers as an argument and returns true if the sum of all the prime elements 
in the given array is even otherwise returns false. 
If the array is empty or if the array does not contain any 
prime element it should return false.
-------------------------------------------------------
Input                                       Output
-------------------------------------------------------
[1,2,3,4,5,6]                                true
[]                                          false
[1,6,9,10]                                  false
[1,2,2,3,9]                                 false
-------------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {number} num the number from isSumOfPrimesEven to checked if it's prime or not
 * @returns {boolean} returns true if num is prime, otherwise returns false
 */
function isPrime(num) {

    num = Math.abs(num); //check for negative entries
    if (num < 2) { // 1 is neither prime nor composite number, and 0 is not a prime number as well
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * @param {number} num the number from isSumOfPrimesEven to checked if it's prime or not
 * @returns {boolean} returns true if num is prime, otherwise returns false
 */
function isSumOfPrimesEven(arr) {
    if (arr.length === 0) return false; //if the array is empty
    let sumPrime = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) { //check the elements are prime
            sumPrime += arr[i]; //sum up the elements
        }
    }
    if (sumPrime === 0) {
        return false; //if there is no prime number in the array, sum will be zero, and return false
    }

    return sumPrime % 2 === 0; //This gives us true value if the sumPrime is only even, otherwise return false

}

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(isSumOfPrimesEven(arr1));