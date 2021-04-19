"use strict";
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

//using iteration//

function reverseNums(list) {
    let arr = [];
    let temp = list;

    while (temp) {
        arr.push(temp.value);
        temp = temp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

console.log(reverseNums(list));