"use strict";

/*
write a recursive function, classAdder(node) that will recurse through a tree such as below and 
add a property called "class" with value "classNode" to each element in the tree.
For example, node3 will become {name: "p", children : null, class : "classNode"}, and similarly
for the others
*/
let node4 = { name: "label", children: null };
let node5 = { name: "input", children: null };
let node3 = { name: "p", children: null };
let node2 = { name: "dv", children: [node4, node5] };
let node1 = { name: "body", children: [node2, node3] };


function classAdder(node) {
    node.classNode = "classNode";
    if (node.children === null) {
        /*do nothing*/
        return;
    } else {
        /* go throgh the children*/
        for (let child of node.children) {
            classAdder(child);
        }
    }
}

classAdder(node2)
console.log(node1);