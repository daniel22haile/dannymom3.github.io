"use strict";

//remove node2 between 1 and 3

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
console.log(list);

let node2 = list.next;
let node3 = node2.next;
list.next.next = node3;
// node2.next = null;
// list.next = null;

console.log(list);