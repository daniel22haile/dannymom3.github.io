'use strict';

/*
--------------------------------------------
    input                           output
 --------------------------------------------
 "what a great day"                    5
 --------------------------------------------
*/

function longestWord(str) {
    let splitted = str.split("");
    let arr = splitted.join("");

    let theLongest = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > theLongest) {
            theLongest = arr[i].length;
        } else {
            theLongest = theLongest;
        }
    }
    return theLongest;
}

let myStr = "what a great day";
console.log(longestWord(myStr))