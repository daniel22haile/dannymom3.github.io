"use strict";



// function isEven(number) {
//     if (number % 2 !== 0) {
//         return false;
//     }
//     return true;
// }
// const arr = [1, 5, 16, 108];

// let answer = arr.forEach(isEven);
// console.log(answer);

const array1 = [1, 2, 3, 4, 5, 6];

function isEven(num) {
    if (num % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}
array1.forEach(element => console.log(isEven(element)));

array1.forEach(alert)