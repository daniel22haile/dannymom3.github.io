"use strict";

/*
check the array is iPerfectPrime or not
--------------------------------------------------------------------------------------------------
input             output
--------------------------------------------------------------------------------------------------
[1, 3, 5, 5, 6, 7]     true, because the values at odd indices are all prime numbers

[2, 7, 6, 9]            false, because value at the odd index 3 is 9, which is not a prime number
--------------------------------------------------------------------------------------------------
*/

function isPrime(num) {
    num = Math.abs(num);
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function isPerfectPrimeArray(arr) {
    if (arr.length === 0 || arr.length == 1) {
        return false;
    }
    for (let i = 1; i < arr.length; i += 2) {
        if (!isPrime(arr[i])) {
            return false;
        }
    }
    return true;
}

let givenArr = [1, 2, 5, 7, 6, 7];
console.log(isPerfectPrimeArray(givenArr));