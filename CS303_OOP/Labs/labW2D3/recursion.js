"use strict";
/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, list2Array, reverseList, reverseListLoop };
//add all of your function names here that you need for the node mocha tests

//TODO - Sum all numbers till the given one
function sumTo(n) {
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += i;
    // }
    // return sum;
    //TODO -- I DID IN RECURSIVE METHOD, TOO.
    if (n < 0) return 0;

    else
        return n + sumTo(n - 1);
}

console.log(sumTo(1));


//TODO -- Calculate ffactorial

function factorial(num) {
    if (num < 0)
        return num * factorial(num + 1);
    if (num === 0) return 1;
    else
        return num * factorial(num - 1);
    // return (num != 1) ? num * factorial(num - 1) : 1;
}

//console.log(factorial(0));

//TODO - Fibonacci numbers

function fibonacci(num) {

    if (num < 0 || num === 0) return 0;
    if (num === 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);

}
//console.log(fibonacci(10));