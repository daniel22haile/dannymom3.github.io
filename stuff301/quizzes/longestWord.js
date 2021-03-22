"use strict";


function longestWord(arr) {
    let myword = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > myword)
            myword = arr[i].length;
    }
    return myword;
}

let givenStr = ["hell0", "daniel", "hi"];
console.log(longestWord(givenStr));