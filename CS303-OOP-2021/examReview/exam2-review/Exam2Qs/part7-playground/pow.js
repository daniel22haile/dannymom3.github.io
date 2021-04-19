"use strict";

function pow(x, n) {
    return (n === 1) ? x : (x * pow(x, n - 1));
}
console.log(pow(2, 3));

//Method 2

function pow1(base, exponent) {
    if (exponent === 1) return base;
    if (exponent === 0) return 1;
    else
        return base * pow(base, exponent - 1);
}

//Method 3 using iteration
function power(base1, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base1;
    }
    return result;
}

function sumTo(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num < 0) return num + sumTo(num + 1);

    else
        return num + sumTo(num - 1);
}
console.log(sumTo(-5));