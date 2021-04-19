"use strict";

function find(item, pos) {
    let results = [];
    let idx = pos.indexOf(item);
    while (idx !== -1) {
        results.push(idx);
        idx = pos.indexOf(item, idx + 1);
    }
    return results;
}

let scores = [10, 20, 30, 10, 40, 20];
console.log(find(10, scores)); //[ 0, 3 ]