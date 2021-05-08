"use strict";

//return the largest h <= n
function largestH(n) {
    let h = 1;
    for (h = 1; h <= n; h = 3 * h + 1) {

    }
    return (h - 1) / 3;
}