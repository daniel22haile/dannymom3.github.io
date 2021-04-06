"use strict";
let list = {
    value: 3,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

function getThrees(list) {
    let temp = list;
    let arr = [];
    while (temp) {

        if (temp.value === 3) {
            arr.push(temp.value);
        }
        temp = temp.next;
    }
    return arr;
}
console.log(getThrees(list));