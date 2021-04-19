"use strict";

/*
Write a function that given an array of integers returns the sum of elements at the prime indices.
 For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which 
 are values at the prime indices of the array.
 */

//TODO -- DONE!
function isPrime(num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfNumAtPrimeIndices(arr) {
    let sum = 0;
    for (let i = 2; i < arr.length; i++) {
        if (isPrime(i)) {
            sum += arr[i];
        }
    }
    return sum;
}
let newArr = [1, 5, 6, 7, 8, 3];
console.log(sumOfNumAtPrimeIndices(newArr));