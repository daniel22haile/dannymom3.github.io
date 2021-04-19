"use strict";

let node4 = {
    name: "label",
    value: "Name",
    children: null
};

let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};

let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};

let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

function findListNode(node, target) {
    /* base case -- if children is null or empty */
    if (node.children === null) {
        if (node.name === target) {
            return node;
        } else {
            return null;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (node.name === target) {
            return node;
        }
        for (let child of node.children) {
            childResult = findListNode(child, target);
            if (childResult !== null) {
                return childResult;
            }
        }
        return null; //did not find the target 
    }
}

console.log(findListNode(node1, "div"));


// "use strict";

// {
// class TreeNode1 {
//     constructor(value) {
//         this.value = value;
//         this.descendents = [];
//     }
// }
// // create nodes with values
// const abe1 = new TreeNode1('Abe');
// const homer1 = new TreeNode1('Homer');
// const bart1 = new TreeNode1('Bart');
// const lisa1 = new TreeNode1('Lisa');
// const maggie1 = new TreeNode1('Maggie');
// // associate root with is descendents
// abe1.descendents.push(homer1);
// homer1.descendents.push(bart1, lisa1, maggie1);

// function contains(node, target) {
//     /* base case -- if children is null or empty */
//     if (node.descendents === null) {
//         if (node.value === target) {
//             return node;
//         } else {
//             return null;
//         }
//     } else { //reductive recursion step
//         let childResult = null;
//         if (node.value === target){
//             return node;
//         } 
//         for (let child of node.descendents) {
//             childResult = contains(child, target);
//             if (childResult === child) {
//                 return child;
//             }
//         }
//         return null; //did not find the target 
//     }
// }

// console.log(contains(abe1, "Abe"));

// }