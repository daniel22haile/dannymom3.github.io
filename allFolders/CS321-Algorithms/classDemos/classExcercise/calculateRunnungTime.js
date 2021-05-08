"use strict";

function sum(arr) {
    return sumHelper(arr, 0);
}
//return sum of the elements from arr[i] ... to the end
function sumHelper(arr, i) {
    if (i == arr.length)
        return 0;
    let result = sum(arr, i + 1) // returns sum of elements from arr[i+1] to the end
    return result + arr[i];
}
//return true if n is even, false otherwise
function isEven(n) {
    //for negative inputs
    if (n < 0)
        return !isEven(n + 1);
    if (n == 0)
        return true;
    //for positive inputs
    let result = isEven(n - 1); //result is true when (n-1) is even... ; false when (n-1) is odd
    return !result;
}