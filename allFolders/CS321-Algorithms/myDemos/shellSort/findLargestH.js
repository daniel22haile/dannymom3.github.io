"use strict";

function findLargestH(n) {
    let h = 1;
    for (h = 1; h <= n; h = (h * 3) + 1) {

    }
    return (h - 1) / 3;
}

console.log(findLargestH(1000));