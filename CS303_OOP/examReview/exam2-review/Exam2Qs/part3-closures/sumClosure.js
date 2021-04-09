"use strict";

//let a = 77;

function sum() {
    // a = 9
    return function(b) {
        let a = 99;
        return a + b;
        // takes "a" from the outer lexical environment
    };

}

console.log(sum(1)(2)); // 
console.log(sum(5)(-1)); //