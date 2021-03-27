"use strict";

function sortThis(a, b, c) {
    let result = [];
    if (a > b && a > c) {
        result[2] = a;
        if (b > c) {
            result[1] = b;
            result[0] = c;

        } else {
            result[1] = c;
            result[0] = b;
        }
    } else if (b > a && b > c) {
        result[2] = b;
        if (c > a) {
            result[1] = c;
            result[0] = a;

        } else {
            result[1] = b;
            result[0] = c;
        }

    } else if (c > a && c > b) {
        result[2] = c;
        if (b > a) {
            result[1] = b;
            result[0] = c;

        } else {
            result[1] = c;
            result[0] = b;
        }
    }

    return result;
}
console.log(sortThis(3, 1, 2))