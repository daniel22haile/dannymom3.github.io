'use strict';

/*
--------------------------------------------
    input                           output
 --------------------------------------------
 "what a great day"                    5
 --------------------------------------------
*/

function longestWord(str) {
    let arr = str.split(" ");
    str = arr.join(" ");

    let theLongest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > theLongest) {
            theLongest = arr[i].length;
        }
    }
    return theLongest;
}

let myStr = "what a great day";
console.log(longestWord(myStr))