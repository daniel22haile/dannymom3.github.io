"use strict";

function factorial(n) {
    return facRec(n, 1);
}

function facRec(x, accumulator) {
    if (x <= 1) {
        return accumulator;
    } else {
        return facRec(x - 1, x * accumulator); // (A)
    }
}