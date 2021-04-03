"use strict";

function f() {
    let x = 1;
    let g = function(m) {
        return m + x;
        //x is our free variable
    }
    return g;
}
let foo = f();
console.log(foo());