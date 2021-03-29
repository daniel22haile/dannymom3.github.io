"use strict";

function avgLengthOfStr(str) {
    let arr = str.split("");
    let sum = 0;
    for (let item of arr) {
        sum += item.length;
    }

    return sum / arr.length;
}

//TODO -- WHAT'S THIS ??? 
const zen = { xed: 5 };
zen.xed = 6;
console.log(zen);