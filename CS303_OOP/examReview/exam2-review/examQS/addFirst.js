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

let first = {
    value: 9,
    next: list
}
list = first; //TODO - replace its place by the new member of node
console.log(list);