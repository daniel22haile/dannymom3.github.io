"use strict";
const arr1234 = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr1234;
console.log(a); //1

console.log(b); //2

console.log(c); // [ 3, 4, 5 ]