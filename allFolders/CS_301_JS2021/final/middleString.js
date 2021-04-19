"use strict";
/*
Write a function that takes a string parameter and returns the middle character of the string. 
If string is of even length then function should return the middle two characters.
*/

function middleChar(str) {

    let charPosn;
    let strLength;
    for (let i = 0; i < str.length; i++) { // This for loop is optional
        if (str.length % 2 !== 0) {
            charPosn = str.length / 2;
            strLength = 1;
        } else {
            charPosn = str.length / 2 - 1;
            strLength = 2;
        }
    }
    return str.substring(charPosn, charPosn + strLength)
}
let givenStr = "Daniel";
console.log(middleChar(givenStr));