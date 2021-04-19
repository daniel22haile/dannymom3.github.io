"use strict"
/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t    (t concatenated with itself 
1 or more times)

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

#greatest_common_divisor_of_strings
----------------------------------------------------
      Input                             Output
----------------------------------------------------
str1= "ABCABC", str2="ABC"              "ABC"
str1="ABABAB", str2="ABAB"              "ABAB"
str1="ABCDEF", str2="ABC"               ""
----------------------------------------------------  
*/


/**
 * 
 * @param {String} str1 first input String
 * @param {String} str2 second input String
 * @returns {String} returns 
 */
function gcdString(str1, str2) {

    if (str1.length < str2.length) {
        // make sure str1 is not shorter than str2
        return gcdString(str2, str1);
    } else if (!str1.startsWith(str2)) {
        // if shorter string is not common prefix, the answer not exists.
        return "";
    } else if (str2.length === 0) {
        // gcd string found
        return str1;
    } else {
        // cut off the common prefix part of str1
        return gcdString(str1.substring(str2.length), str2);
    }
}

let str1 = "ABCABC",
    str2 = "ABC";
console.log(gcdString(str1, str2));