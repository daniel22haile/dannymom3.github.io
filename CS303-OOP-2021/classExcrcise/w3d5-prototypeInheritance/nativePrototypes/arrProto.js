"use strict";
let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(arr.__proto__.__proto__.__proto__); // null

//TODO - Some methods in prototypes may overlap, for instance, Array.prototype has its own toString that lists comma-delimited elements:

let arr1 = [1, 2, 3]
console.log(arr1); // 1,2,3 <-- the result of Array.prototype.toString

//TODO - NB In-browser tools like Chrome developer console also show inheritance (console.dir may need to be used for built-in objects):