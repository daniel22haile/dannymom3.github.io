"use strict";

function tailRecursiveFactorial(number, result = 1) {
    if (number === 1) {
        return result;
    } else {
        return tailRecursiveFactorial(number - 1, result * number);
    }
}

console.log(tailRecursiveFactorial(5)); // 120