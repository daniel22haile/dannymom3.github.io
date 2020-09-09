"use strict";

function isVowel(char) {
    if (char.length == 1) {
        var vowels = "aeiou";
        var isVowel = vowels.indexOf(char) >= 0 ? true : false;

        return isVowel;
    }
}
console.log(isVowel("e"))