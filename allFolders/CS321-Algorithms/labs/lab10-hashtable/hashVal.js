"use strict";


function hashcode(key) {
    return key;
}

function hashvalue(hashcode) {
    return (2 * hashcode + 5) % 11;
}

function computeAll(arr) {
    for (let e of arr) {
        let hc = hashcode(e);
        let hv = hashvalue(hc);
        console.log(hv);
    }
}

let arr = [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5];
computeAll(arr);