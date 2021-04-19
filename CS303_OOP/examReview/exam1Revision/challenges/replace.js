"use strict";
//Write a program to replace all the occurrence of "for" in an input string with 4.

let str = "Thanks for joining us.";
/*Can use replace() method
 str = str.replace("for", "4");
 */
function replaceWord(str) {


    let arr = str.split(" ");
    str = arr.join(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "for") {
            arr[i] = "4";
        }
    }


    return arr;
}
console.log(replaceWord(str));