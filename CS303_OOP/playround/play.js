"use strict";

// function showMessage(from, text) {
//     from = "*" + from + "*";
//     console.log(from + ":" + text);
// }
// let from = "Ann";
// showMessage(from, "Hello");

// console.log(from);

function sayHi() {
    console.log("Hello");
}

const myHi = sayHi();
//console.log(sayHi);
// console.log(myHi);

function higherOrder() {
    return sayHi();
}
higherOrder();