"use strict";

let arr = [1, 200, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

let productResult = arr.reduce((product, current) => product * current, 1);
let maxItem = arr.reduce((myMax, current) => Math.max(myMax, current), -Infinity);

console.log(`sum of array [1, 200, 3, 4, 5] is ${result}`);
console.log(`product of array [1, 200, 3, 4, 5] is ${productResult}`);
console.log(`The maximum value of array [1, 200, 3, 4, 5] is ${maxItem}`)