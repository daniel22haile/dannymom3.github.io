"use strict";
/*
An array is called a perfectly odd array if every element at the odd indices 
of the array is also odd. Write a function named isPerfectlyOdd that takes
 an array of integers as a parameter and checks whether it is perfectly odd. 
 Return false if the array is an empty array.

 ---------------------------------------------
Input                               Output
---------------------------------------------
[]                                  false
[2,3,4,5,7,8]                       false 
[3,9,9,5,5,7,9]                      true
---------------------------------------------
 */
//TODO -- DONE!
function isPerfectlyOdd(arr) {
    if (arr.length === 0) return false; //if array is empty
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}
let newArr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(isPerfectlyOdd(newArr));