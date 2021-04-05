"use strict";

function power(base, exponent) {
    let result = base;

    for (let i = 1; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let myBase = 2;
let myExp = 3;
console.log(power(myBase, myExp));