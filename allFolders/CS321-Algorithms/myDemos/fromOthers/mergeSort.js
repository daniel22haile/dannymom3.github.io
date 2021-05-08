"use strict";

// Merge function from earlier
function merge(arr1, arr2) {
    let results = [];
    let counter = 0;
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results[counter++] = arr1[i];
            i++;

        } else {
            results[counter++] = arr2[j];
            j++;
        }
    }
    while (i < arr1.length) {
        results[counter++] = arr1[i];
        i++;
    }
    while (j < arr2.length) {
        results[counter++] = arr2[j];
        j++;
    }
    return results;
}

// Recrusive Merge Sort
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

//console.log(mergeSort([10, 24, 76, 73]));
console.log(merge([3, 5], [1, 2, 4]));
//expected --> [1, 2, 2, 3,4, 6, 7]