"use strict";

function avgLengthOfStr(arr) {
    // let splitted = str.split("");
    // let arr = splitted.join("");
    let sum = 0;
    for (let item of arr) {
        sum += item.length;
    }

    return sum / arr.length;
}

let mySt = ["hi", "dan", "word", "this is my longest word ever"];
console.log(avgLengthOfStr(mySt));

//TODO -- WHAT'S THIS ??? 
const zen = {
    xed: 5
};
zen.xed = 6;
console.log(zen); //{ xed: 6 }