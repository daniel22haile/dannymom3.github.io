"use strict";

let arr = [5, 44, 1, 33];

let smallest = arr.reduce((a, b) => a < b ? a : b);
console.log(smallest);