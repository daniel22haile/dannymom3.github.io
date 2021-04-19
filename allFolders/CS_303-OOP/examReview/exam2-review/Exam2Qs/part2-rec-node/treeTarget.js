"use strict";

/**
 * Searches through tree until find the target as the value of a node
 * @param {object} node that is the root of a tree or subtree
 * @param {string} target value that i am searching for in the tree
 * @returns {boolean} true if the target is in the tree, else false
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

function treeFind(node, target) {

    if (node.value === target) {
        return true;
    };
    if (node.next === null) {
        return false;
    } else {
        //TODO ----?

        for (let item of node.next) {
            if (treeFind(item, target)) {
                return true;
            };
        }
    }
    return false;
}

console.log(treeFind(list, 7));
console.log(treeFind(list, 3));