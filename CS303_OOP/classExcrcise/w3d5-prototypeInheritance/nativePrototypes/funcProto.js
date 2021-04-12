"use strict";
/*
Other built-in objects also work the same way. Even functions – 
they are objects of a built-in Function constructor, and their 
methods (call/apply and others) are taken from Function.prototype. Functions have their own toString too.
*/
function f() {}

console.log(f.__proto__ == Function.prototype); // true
console.log(f.__proto__.__proto__ == Object.prototype); // true, inherit from object