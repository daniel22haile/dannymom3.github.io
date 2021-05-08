"use strict";
//this is the first sum of n number, using a tail recursion
function sumFirst(n) {

    return sumFirstHelper(n, 0);
}

function sumFirstHelper(num, sum) {
    if (num === 0) return sum;
    if (num < 0) return num + sumFirstHelper(num + 1, num + sum);
    else
        return num + sumFirstHelper(num - 1, num + sum);
}

console.log(sumFirst(6));
console.log(sumFirst(-6));