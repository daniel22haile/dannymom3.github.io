"use strict";

function isPalindrome(str) {
    let len = str.length;
    str = str.toLowerCase();

    for (let i = 0; i < len / 2; i++) {
        if (str.charAt(i) !== str.charAt(len - 1 - i)) { // len = str.length ==> len - 1 ==> last char ==> len -1 -i =>
            // chech char towards charAt(0)
            return false;
        }
    }
    return true;
}

let myStr = "madaM";
console.log(isPalindrome(myStr));