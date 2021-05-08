"use strict";
const test = require("./dLinkedList");
let myDoubly = new test.DLinkedList();
//todo - method 1 - sum
function sum(list) {
    let iter = list.positions();
    let sum = 0;
    while (iter.hasNext()) {
        let node = iter.nextObject();
        sum += node.element();
    }
    return sum;
}

myDoubly.insertLast(4);
myDoubly.insertLast(2);
myDoubly.insertLast(1);
myDoubly.insertLast(3);

console.log(`sum of first method ${sum(myDoubly)}`);
console.log(`sum of second method ${sum2(myDoubly)}`);
console.log(`search ${search(myDoubly)}`);

//todo - method 2 - sum

function sum2(list) {
    let current = list.first();
    let sum = 0;
    while (current !== list.last()) {
        let elem = current.element();
        sum += elem;
        current = list.after(current);
    }
    return sum + list.last().element();
}

//todo - search element ?????

function search(element) {
    let current = header._next;
    while (current !== this._trailer) {
        if (current.element() !== element) {
            return false;
        } else {
            current = current.next;
        }
    }
    return false;
}

//todo - find  ?????
function find(i) {
    let k = 0;
    let current = header._next;
    while (current !== this._trailer) {
        if (current.element() !== i) {
            k++;
            return false;
        } else {
            current = current.next;
        }
    }
    return false;
}


function removeMiddle(list) {

    let current = list.first();
    let mid = list.size() / 2;
    while (current !== list.last()) {
        if (list.size() % 2 !== 0) {
            return mid;
        } else {
            let result = Math.floor()
        }
    }
}