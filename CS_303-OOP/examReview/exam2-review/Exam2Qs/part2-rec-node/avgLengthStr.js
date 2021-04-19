"use strict";

function findAverageLengthOfStr(str) {
    if (str.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i].length;
    }
    let average = sum / str.length;
    return average;
}


let givenStrArr = ["Daniel", "Haile"];
console.log(findAverageLengthOfStr(givenStrArr));