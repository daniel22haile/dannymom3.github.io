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

/**
 * @param {object} node is a tree node
 * @returns {undefined} 
 * we are just printing, not returning anythig
 */
function printName(node) {
    /* base case -- if children is null or empty */
    if (node.children === null) {
        console.log(node.name, ":", node.value);
        return node.name;
    } else { //reductive recursion step
        console.log(node.name, ":", node.value);
        for (let child of node.children) {
            printName(child);
        }
    }
}
let printResult = printName(node1);
console.log("printResult is:", printResult);

/**
 * @param {object} node is a tree node
 * @param {string} target is a string we are matching
 * @returns {Boolean} true if target is in tree
 *  */
function contains(node, target) {
    /* base case -- if children is null or empty */
    if (node.children === null) {
        if (node.name === target) {
            return true;
        } else {
            return false;
        }
    } else { //reductive recursion step
        let childResult = false;
        if (node.name === target){
            return true;
        } 
        for (let child of node.children) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return false; //did not find the target 
    }
}

console.log("testing div, should be true: ", contains(node1, "div"));
console.log("testing span, should be false: ", contains(node1, "span"));