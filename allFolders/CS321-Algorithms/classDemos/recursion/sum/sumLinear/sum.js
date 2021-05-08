"use strict";

//find the sumFirst using linear recursion

function sumFirst(n) {
    if (n === 0) return 0
    if (n < 0) return n + sumFirst(n + 1);
    else
        return n + sumFirst(n - 1);
}

console.log(sumFirst(-6));
console.log(sumFirst(6));