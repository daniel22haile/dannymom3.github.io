"use strict";

function reverseStrRec(str) {
    if (str === "") {
        return "";
    } else {
        //TODO ------ substr() vs substring() ??
        return str[str.length - 1] + reverseStrRec(str.substring(0, str.length - 1));
    }
}

let givenStr = "Daniel";
console.log(reverseStrRec(givenStr));