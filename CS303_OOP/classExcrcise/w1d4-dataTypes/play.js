"use strict";

//repeat(n) -- repeates the string n times

let str = "I hate you!";
console.log(str.repeat(5), "\n"); //I hate you! --> 5 times

function extractMoney(str) {
    return parseInt(str.slice(1));
}
console.log(extractMoney("$20"));


//Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000
//A negative number after "e" causes the number to be divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 (123 millionths).
console.log(123e10); //123 appends 10 zeros



console.log("\u{1F60D}"); //😍 smile face

let foo = "12";
let answer = (Number(foo));
console.log(typeof(answer) === typeof(Number));

function readNumber(arr) {

    if (arr.length === 0) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[0])) {
            return Number(arr[0]);
        } else {
            return 0;
        }
    }
}

let nums = ["123", "gd33"];
console.log(readNumber(nums));
console.log(typeof(Number(nums[0])));