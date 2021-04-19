"use strict";

/*Write a recursive function to count the instances of a letter in a string. Use recursion 
rather than split and filter. • Base case? • Reductive recursive call? */
function countString(str, letter) {
    if (str.length === 0) {
        return 0;
    } else {
        if (str[0] === letter) {
            return 1 + countString(str.substring(1), letter)
        } else {
            return countString(str.substring(1), letter)
        }
    }
}
console.log(countString("tomorrow exam is very is easy ...", "w"))