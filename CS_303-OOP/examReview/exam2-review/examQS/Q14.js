"use strict";

let node1 = {
    name: "body",

}
let node2 = {
    name: "div",

}
let node3 = {
    name: "p",

}
node1.next = node2;
node2.next = node3;

console.log(node1);

//insert node5 between node1 and node3

let node5 = {
    name: "node5",
}
node1.next = node5;
node5.next = node2;

console.log(JSON.stringify(node1))