"use strict";
/*
To understand what tail call optimization (TCO) is, we 
will examine the following piece of code. 
I’ll first explain how it is executed without TCO and then with TCO.
*/
function id(x) {
    return x; // (A)
}

function f(a) {
    let b = a + 1;
    return id(b); // (B)
}
console.log(f(2)); // (C)