/* eslint-disable id-length */
"use strict";
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    /* function code is to be written, empty now */
    //return 8;  //:) we cheat!!

    debugger;
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

"use strict";
/**
 * 
 * @param {number} a is first number 
 * @param {number} b is second number
 * @param {number} c is 3rd number
 * @return {number} largest
 */
function max3(a, b, c) {
    if (a >= b && b >= c) {
        return a;
    } else if (b >= a && a >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(max3(3, 5, 9));