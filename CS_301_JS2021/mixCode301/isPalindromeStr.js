"use strict";

// function okClick() {
//     alert("ok");
// }

// function init() {
//     //OR let init = function()
//     document.getElementById("ok").onclick = okClick;
// }
// window.onload = init;


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


function findAverageLengthOfStr(str) {
    if (str.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i].length;
    }
    let average = sum / str.length;
    return average;
}


let givenStrArr = ["Daniel", "Haile"];
console.log(findAverageLengthOfStr(givenStrArr));


/*
Write a function named fillArray that takes two parameters first an empty array 
and second a number representing the max value. This function should fill the array 
with 100 random values between 0 and the max parameter passed.
*/
// function fi(arr, maxVal) {
//     let arrFill = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < maxVal) {
//             arrFill.push(Math.random() * 100);
//         }

//     }
//     return arrFill;
// }

// console.log(fi([], 90));

function fillMyArray(emptyArr, num) {
    let pleaseFill = [];
    for (let i = 0; i < num; i++) {

        pleaseFill.push(Math.floor(Math.random() * 10) + 10);
    }
    return pleaseFill;
}
let arr = [];

console.log(fillMyArray(arr, 5));