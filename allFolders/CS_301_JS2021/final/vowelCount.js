"use strict";
const prompt = require("prompt-sync")();
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;
    let userStr = str.toLowerCase();
    // loop through string to test if each character is a vowel
    for (let letter of userStr) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);


//METHOD - 2
function vowel_count(str1) {
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for (let i = 0; i < str1.length; i++) {
        if (vowel_list.indexOf(str1[i]) !== -1) {
            vcount++;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));



//Try, again
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("daniel"));