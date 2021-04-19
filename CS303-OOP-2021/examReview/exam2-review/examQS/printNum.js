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

function listNumbers(list) {
    let temp = list;

    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

console.log(listNumbers(list));

//TODO - Recursively

function recListNums(list) {
    console.log(list.value); //This prints out the first number

    if (list.next) {
        recListNums(list.next);
    }
}

console.log(listNumbers(list));