"use strict";
// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//TODO -- CHANGE IN TO ARROW FUNCTION
let min = (a, b) => a < b ? a : b;

console.log(min(3, 5));

let sum = (a, b) => a + b;
console.log(sum(6, 1));

//TODO -- NB:
console.log(typeof null === "object");
console.log(typeof undefined === "undefined");
console.log(typeof
    function() {} === "function"); //TODO - watchout the {}, it should be included

function sayHi() {
    console.log("Hello");
}
const myHi = sayHi;
//console.log(myHi);

function higherOrder() {
    return sayHi;
}
higherOrder()();


let sayHello = () => "say Hello";
console.log(sayHello());