"use strict";
const prompt = require("prompt-sync")();
/*
write a function   that returns true if str contains text "lottery" or "prize",
otherwise return false.
*/
/**
 * 
 * @param {String} str user input String
 * @return {boolean} returns true if the string contains lottery or prize, otherwise
 * returns false
 */
function checkSpam(str) {

    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "prize" || arr[i] !== "lottery") {
            return false;
        }
    }
    return arr.join(" ");

}

let inputStr = prompt("Enter a string: ");
let result = checkSpam(inputStr);
console.log(result);