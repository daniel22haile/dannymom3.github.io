"use strict";
/*
Write a function that takes a string as input and reverse only the vowels of a string.

# reverse_vowels_of_a_string
----------------------------------------------
     Input                       Output 
----------------------------------------------
     "hello"                     "holle"
     "leetcode"                  "leotcede
----------------------------------------------

Convert the string to an array. Maintain a pointer at the front and end of string.
   End will point to the first vowel found from the end.
   If the current letter is a consonant, do nothing and advance to next letter.
   If the current letter is a vowel, swap it with the end pointer, and decrement end to the next vowel.
   When the front passes the end, we're done.
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {String} str user input String
 * @returns {String} returns reversed vowel String
 */
function reverseVowels(str) {
    let result = "";
    str = str.split("");
    let vowels = "aAeEiIoOuU";

    let end = str.length - 1;

    for (let i = 0; i < str.length; i++) {
        if (i > end) {
            // We're done.
            break;
        }
        // Find first vowel from end of string.
        while (end >= 0) {
            if (vowels.indexOf(str[end]) !== -1) {
                // We have a vowel.
                break;
            }
            end--;
        }
        if (vowels.indexOf(str[i]) === -1) {
            // Consonant, do nothing.
        } else {
            // Vowel, swap with end.
            var temp = str[end];
            str[end] = str[i];
            str[i] = temp;
            end--;
        }
    }
    result = str.join("");
    return result;
}

let newStr = "leetcode";
console.log(reverseVowels(newStr));