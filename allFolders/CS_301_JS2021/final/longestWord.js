"use strict";

function longestWord(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}

let strArr = ["dan", "daniel haile", "this is the longest one"];
console.log(longestWord(strArr));




// functionremoveNegativ(arr) {​​​​​​​​
//     let newArr = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {​​​​​​​​
//         if (arr[i] >= 0)
//             newArr[j] = arr[i];
//         j++;
//     }​​​​​​​​
//     return newArr;
// }​​​​​​​​
// let num = [1, -2, 3, -4, 5, -6];
// console.log(removeNegativ(num))