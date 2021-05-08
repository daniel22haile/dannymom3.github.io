"use strict";

/**
 * Internal recursive `_isPalindrome()` function
 * optimized for recursion with proper tail call.
 *
 * A single reference to this function is created and stored
 * after the immediate invocation of the outer arrow function,
 * not accessible outside the scope of the outer arrow function,
 * but accessible to `isPalindrome()` via closure.
 */
// function isPalindrome(str) {
//     const len = str.length;

//     if (len <= 1) return true;
//     if (str[0] !== str[len - 1]) return false;

//     // proper tail call
//     return isPalindrome(str.slice(1, -1));
// }

let isPalindrome = function(str) {
    if (str.length < 2) {
        return true;
    }

    if (firstCharacter(str) == lastCharacter(str)) {
        return isPalindrome(middleCharacters(str));
    }

    return false;
};

console.log(isPalindrome("madam"));