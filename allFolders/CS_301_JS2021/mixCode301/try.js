"use strict";

// function firstAndLastSum(digits) {

//     let sum = 0;
//     let last = digits % 10;
//     let first = 0;
//     while (digits > 0) {

//         first = digits;
//         digits = Math.floor(digits / 10);
//     }
//     sum = last + first;

//     return sum;
// }

// let nums = 1234;
// console.log(firstAndLastSum(nums));


function filterNegatives(arr) {
    let fillMe = [];
    //let k = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            //fillMe[k] = arr[i]; OR
            fillMe.push(arr[i]);
            // k++;
        }
    }
    return fillMe;
}
let arrr = [1, -2, 3, -4];
console.log(filterNegatives(arrr));


function isPalindrome(arr) {
    let copy = [];
    for (let a of arr) {
        copy.push(a);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr.shift() !== copy.pop()) {
            return false;
        }

    }
    return true;
}
let str = ["madam"];
console.log(isPalindrome(str));


function getMiddle(arr) {

    let half = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0) {

            return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
        }
    }
    return arr[(half - 1) / 2];
}
let arrr4 = [1, 2, 333, 4, 3];
console.log(getMiddle(arrr4));


function mergeArrays(arr1, arr2) {

    let unite = arr1.concat(arr2);
    unite.sort();
    return unite;
}

let first = [1, 2, 5];
let second = [4, 7, 8];

console.log(mergeArrays(first, second));

function rotateLeft(arr) {
    let first = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}

// let newArr = [1, 2, 3, 4, 5];
// console.log(rotateLeft(newArr));


function rotateRight(arr) {
    let last = arr[arr.length - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}

let newArr22 = [1, 2, 3, 4, 5];
console.log(rotateRight(newArr22));

function nRotateLeft(arr, num) {
    let nRotateLeft2 = arr;
    for (let i = 0; i < num; i++) {
        nRotateLeft2 = rotateLeft(nRotateLeft2);
    }
    return nRotateLeft2;
}

//let nR = [1, 2, 3, 4, 5];
console.log(nRotateLeft([1, 2, 3, 4, 5], 2));

function averageAge(users) {
    return users.reduce((a, b) => a + b.age, 0) / users.length;
}
//OR
function aveAge(users) {
    let totAge = 0;
    for (let user of users) {
        totAge += user.age;
    }
    return totAge / users.length;
}

let family = [{
        name: "Daniel",
        age: 28
    },
    {
        name: "Alex",
        age: 30
    },
    {
        name: "mek",
        age: 23
    }
]

console.log(averageAge(family));
console.log(aveAge(family));


function countProps(users) {
    let count = 0;
    for (let props in users) {
        count++;
    }
    return count;
}
console.log(countProps(family));