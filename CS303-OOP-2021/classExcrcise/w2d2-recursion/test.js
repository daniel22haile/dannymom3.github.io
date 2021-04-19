"use strict";

function A() {
    console.log("A is called");
    console.log("Before B is called");
    B();
    console.log("After B is called")
}

function B() {
    console.log("B is called");
    console.log("Before C is called");
    C();
    console.log("After C is called");
}

function C() {
    console.log("C is called");
}
A();
console.log("After A is called");

//TODO - why not working
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }

    }
    return max;
}


console.log(findMax(1, 2, 3, 4, 5)); //TODO -- ! do not pass array inside the parameter -- (1, 2, 3, 4, 5) NOT [1, 2, 3, 4, 5]