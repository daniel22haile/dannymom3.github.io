"use strict";

function isVowel(str) {

    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {

            return true;
        }

    }
    return false;
}

let str = "lve";
let output = isVowel(str);
console.log(output);