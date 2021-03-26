"use strict";



function isEven(number) {
    if (number % 2 !== 0) {
        return false;
    }
    return true;
}
const arr = [1, 5, 16, 108];

let answer = arr.forEach(isEven);
console.log(answer);