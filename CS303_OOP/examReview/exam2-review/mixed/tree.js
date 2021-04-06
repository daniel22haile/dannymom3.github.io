"use strict";

let n5 = { type: "label", children: null };
let n4 = { type: "input", children: null };
let n3 = { type: "p", children: null };
let n2 = { type: "div", children: [n4, n5] };
let n1 = { type: "body", children: [n2, n3], };




function textAdder(node) {
    if (node.type === "input" || node.type === "p") {
        node.class = "text"
    };

    if (node.children === null) {
        /* do nothing */
        return; //not required
    } else { //go through the children
        for (const child of node.children) {
            textAdder(child);
        }
    }
}
textAdder(n1);
console.log(n3);
console.log(n2);
console.log(n4);