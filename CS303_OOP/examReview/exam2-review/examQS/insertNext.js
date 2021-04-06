"use strict";
//add 5 between 1 and 2
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

let node5 = {
    value: 5,
}
node5.next = list.next;
list.next = node5;

console.log(list);