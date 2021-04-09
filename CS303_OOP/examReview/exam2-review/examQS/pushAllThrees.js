"use strict";
let list = {
    value: 3,
    next: {
        value: 2,
        next: {
            value: 6,
            next: {
                value: 8,
                next: {
                    value: null
                }
            }
        }
    }
};

function countTargetNodes(list) {
    let temp = list;
    let arr = [];
    while (temp) {

        if (temp.value % 2 === 0) {
            arr.push(temp.value);
        }
        temp = temp.next;
    }
    return arr;
}
console.log(countTargetNodes(list));