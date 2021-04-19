"use strict";

function filterPositiveNums(arr) {
    let newArr = [];
    //Or
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            //newArr.push(arr[i]);  OR
            newArr[j] = arr[i];
            j++;

        }
    }
    return newArr;
}

let givenArr = [1, 2, -3, 4, -4, -7];
console.log(filterPositiveNums(givenArr));