"use strict";

function middleString(str) {
    let strPos;
    let length;

    for (let i = 0; i < str.length; i++) {
        if (str.length % 2 !== 0) {
            strPos = str.length / 2;
            length = 1; //because if it's odd char length = 1
        } else {
            strPos = str.length / 2 - 1;
            length = 2; // if it's even take the two chars, so length = 2
        }
    }
    return str.substring(strPos, strPos + length);
}

let newStr = "Daniel";
console.log(middleString(newStr));