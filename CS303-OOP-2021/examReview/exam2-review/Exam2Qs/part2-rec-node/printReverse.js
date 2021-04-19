"use strict";

/*

Write a recursive function, printReverse, which takes a node as a parameter. 
Print all the values of LinkedList in reverse order. 

Assume the following node structure:
*/
let list = {
    credit: 1,
    next: {
        credit: 2,
        next: {
            credit: 3,
            next: null
        }
    }
};

function printReverse(node) {
    if (node.next) {
        printReverse(node.next);
    }
    console.log(node.credit);
}
printReverse(list);