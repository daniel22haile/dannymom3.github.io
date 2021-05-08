"use strict";

//using rest parameter
function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let [head, ...tail] = array;
        return head + sum(tail);
    }
}

console.log(sum([1, 2, 3, 4, 5]));