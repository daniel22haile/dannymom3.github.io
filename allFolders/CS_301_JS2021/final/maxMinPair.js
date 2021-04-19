"use strict";

function maxMinPair(arr) {

    arr.sort((num1, num2) => num1 - num2); //sorted array

    let newArr = [];

    newArr.push(arr[arr.length - 1], arr[0]);
    return newArr;

}

let arr = [5, 2, 30, 4, 1];
console.log(maxMinPair(arr));