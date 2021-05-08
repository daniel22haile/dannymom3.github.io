"use strict";

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) { // n - i - 1 , is improvement from bubble sort
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);

            }
        }
    }
    //swap
    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

let array = [1, 3, 5, 2, 6, 4];
console.log(bubbleSort(array));