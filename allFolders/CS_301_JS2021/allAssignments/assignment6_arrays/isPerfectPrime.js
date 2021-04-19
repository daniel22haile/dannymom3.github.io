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

function isPerfectPrime(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0 && isPrime(arr[i])) {
            true;
        }
    }
    return false;
}

let arr = [1, 3, 5, 5, 6, 7];

console.log(isPerfectPrime(arr));