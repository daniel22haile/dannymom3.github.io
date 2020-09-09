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