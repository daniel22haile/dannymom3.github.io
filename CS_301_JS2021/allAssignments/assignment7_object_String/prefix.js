"use strict";

/**
 * 
 * @param {String} str1 first user input String
 * @param {String} str2 second user input String
 * @return {String} returns prefix String of the two common user inputed Strings
 */
function prefixes(str1, str2) {
    let newStr = "";
    let count = 0;
    while (true) {
        if (str1[0 + count] === str2[0 + count]) {
            newStr += str1[0 + count];
            count++;
        } else {
            break;
        }

    }
    return newStr;
}
//expected output //disa
console.log(prefixes("disadvantage", "disallowed"));