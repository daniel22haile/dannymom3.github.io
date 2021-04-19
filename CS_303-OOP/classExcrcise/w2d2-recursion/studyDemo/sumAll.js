"use strict";

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
//TODO - NOT square bracket
console.log(sumAll(1, 2, 3, 4, 5, 6)); //21