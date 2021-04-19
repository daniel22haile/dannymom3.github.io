"use strict";

let e = 10,
    a = 1,
    b = 2,
    c = 3,
    d = 4;

function sum() {
    return function() {
        return function() {
            // outer functions scope
            return function() {
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum()()()());