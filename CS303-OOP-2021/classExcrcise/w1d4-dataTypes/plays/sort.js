"use strict";

function increasingNumeric(num1, num2) {
    // if (num1 > num2) return 1;
    // if (num1 === num2) return 0;
    // if (num1 < num2) return -1;
    //or 
    return num1 - num2;
}

function decreasingNumeric(num1, num2) {

    // if (num1 < num2) return 1;
    // if (num1 === num2) return 0;
    // if (num1 > num2) return -1;
    //or 
    return num2 - num1;
}
let arr = [1, 3, 5, 2, 4];
arr.sort(increasingNumeric);
console.log(arr); //[ 1, 2, 3, 4, 5 ]

arr.sort(decreasingNumeric);
console.log(arr); // 5, 4, 3, 2, 1 ]