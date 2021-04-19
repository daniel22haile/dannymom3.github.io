"use strict";

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let temp = list;
let max = -Infinity;
while (temp !== null) {
    if (temp.value > max) {
        max = temp.value;
    }
    temp = temp.next

}
console.log(max)