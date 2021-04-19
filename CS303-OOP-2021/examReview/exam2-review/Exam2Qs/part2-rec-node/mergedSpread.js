"use strict";

let arr = [3, 1];
let arr2 = [8, 15];

let merged = [0, ...arr, 2, ...arr2];

console.log(merged); //[ 0, 3, 1, 2, 8, 15 ]
console.log(Math.max(...merged)); //15