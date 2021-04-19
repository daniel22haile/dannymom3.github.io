"use strict";
/**
 * 
 * @param {String} str user input String
 * @returns {boolean} returns true if the string is palindrome, otherwise returns false
 */
function isPalindrome(str) {
    let temp = str.toLowerCase();

    let splittedArr = temp.split(""); //change in to Array using split() method
    //the reason why to change in to arry using split() method is, String doesn't have reverse() built in method
    let reversedArr = splittedArr.reverse(); //after making Array, reverse it the array String
    //after reversing join() with empty string, looks like reverse string and compare with temp (above in line 8)
    let reversedStr = reversedArr.join("");

    return temp === reversedStr;
}


console.log(isPalindrome("madam"));