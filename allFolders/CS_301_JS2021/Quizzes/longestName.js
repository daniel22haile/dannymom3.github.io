"use strict";

function longestName(arr) {
    let longest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }

    return longest;
}
console.log(longestName(["Australia", "Germany", "United States of America"])); // United States of America




function countCharStr(arr) {
    let str = [];
    for (let i = 0; i < arr.length; i++) {
        str.push(arr[i].length);
    }

    return str;
}
console.log(countCharStr(["daniel", "haile", "this is me"]));