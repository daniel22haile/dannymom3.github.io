"use strict";

const arr = [1, 5, 18, 2, 77, 108];

function isEven(number) {
    if (number % 2 !== 0) {
        return false;
    }
    return true;
}
//TODO -- forEach
// const answer = arr.forEach(() => isEven);
// console.log("for each: ", answer);


const filtered = arr.filter(isEven);
const firstEven = arr.find(isEven);
const indexFirstEven = arr.findIndex(isEven);

console.log("filtered: ", filtered);
console.log("firstEven", firstEven);
console.log("index of first even: ", indexFirstEven);