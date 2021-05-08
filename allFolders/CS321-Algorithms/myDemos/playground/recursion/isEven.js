"use strict";

function isEven(n) {
    if (n === 0) return true;
    if (n === 1) return false;
    if (n < 0) {
        return !isEven(n + 1); //todo - for the negative entry
    }
    let result = isEven(n - 1);
    return !result; //todo - negation result because n - 1 and n is opposite
}

console.log(isEven(-6));