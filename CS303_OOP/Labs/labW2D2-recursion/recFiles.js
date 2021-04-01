"use strict";

//TODO - Sum all numbers till the given one
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(100));


//TODO -- Calculate ffactorial

function factorial(num) {
    if (num < 0)
        return num * factorial(num + 1);
    if (num === 0) return 1;
    else
        return num * factorial(num - 1);
    // return (num != 1) ? num * factorial(num - 1) : 1;
}

console.log(factorial(0));

//TODO - Fibonacci numbers

function Fibonacci(num) {
    if (num < 0) return num;
    else
        return Fibonacci(num - 1) + Fibonacci(num - 2);
}