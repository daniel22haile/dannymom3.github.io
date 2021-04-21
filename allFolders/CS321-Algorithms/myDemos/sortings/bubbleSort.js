"use strict";

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
            }
        }
    }

    function swap(a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    return arr;
}

let array = [6, 1, 2, 3, 4, 5];
console.log(bubbleSort(array));