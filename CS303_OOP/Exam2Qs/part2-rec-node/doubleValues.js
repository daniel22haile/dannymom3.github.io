"use strict";
/*
The following is a node structure for a linked list. 
Write a recursive function,doubleTheCredits, that updates the credit property of every node by doubling it. 
​Assume thefollowing node structure:

{
    courseName : ‘CS303’,
    credit : 4,
    next : null
}
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
//TODO - expected --> { credit: 2, next: { credit: 4, next: { credit: 6, next: null } } }

function doubleTheCredits(node) {
    node.credit = node.credit * 2;
    if (node.next) {
        doubleTheCredits(node.next);
    }
}

doubleTheCredits(list);
console.dir(list);