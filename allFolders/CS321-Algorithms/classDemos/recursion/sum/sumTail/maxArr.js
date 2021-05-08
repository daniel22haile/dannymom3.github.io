"use strict";

function findMax(arr) {
    return maxHelper(arr, 0);
}
//TODO ????    
function maxHelper(arr, i) {
    if (arr.length === 0 || arr.length === 1) return i;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[0]) {
            i = arr[j];
        }
    }
    return arr;
}

console.log(findMax([1, 3, 4, 55, 2]));