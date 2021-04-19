"use strict";

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

//TODO --Please note that there is no more [[Prototype]] in the chain above Object.prototype:

console.log(Object.prototype.__proto__); // null

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.__proto__.__proto__.__proto__);
//TODOD - list all parent chains of arr
//answer : 
console.log(Object.prototype.__proto__);