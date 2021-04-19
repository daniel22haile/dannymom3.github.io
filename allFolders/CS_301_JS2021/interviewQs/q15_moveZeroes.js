"use strict";

/*
Given an array nums, write a function to move all 0's to the end of it while
 maintaining the relative order of the non-zero elements.
 
 #move_zeroes
 
 Example:
   Input: [0, 1, 0, 12, 3]
   Output: [1,3,12,0,0]
   
   Note: you must do this in-place without making a copy of the array
   */

//Method - 1
function moveZeroes(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            non zero element count
            arr[count] = arr[i]
            count++;

        }
    }

    while (count < arr.length) {

        arr[count] = 0

        count++
    }

    return arr;
}



let newArr = [0, 1, 0, 12, 3];
console.log(moveZeroes(newArr));

//Method - 2

function moveAllzeroesToEnd(arr) {
    arr.sort();
    let i = 0;
    let j = arr.length - 1;
    while (j > i + 1) {
        if (arr[i] !== 0) {
            i++;
        }
        if (arr[j] === 0) {
            j--;
        }
        if (arr[i] === 0) {
            arr[i] = arr[j];
            arr[j] = 0;
        }
    }
    return arr;
}

let newArr2 = [0, 1, 0, 12, 3];
console.log(moveAllzeroesToEnd(newArr2));

function pushZerosToEnd(arr) {
    arr.sort((a, b) => a - b);
    let k = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
            k++;
        }
    }
    return arr;
}
console.log(pushZerosToEnd([10, 100, 2, 1, 0, 3, 0, 5, 6]));