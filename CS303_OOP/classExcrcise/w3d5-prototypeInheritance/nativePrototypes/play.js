"use strict";

// let obj = {};
// console.log(obj);

let arr = ['a', 'b', 'c'];
// it inherits from Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true
// then from Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype); // true
// and null on the top.
console.log(arr.__proto__.__proto__.__proto__); // null