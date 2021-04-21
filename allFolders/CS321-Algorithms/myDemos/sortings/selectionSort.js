"use strict";

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        //TODO - minPos used to find minimum element in arr[bottom] ... arr[top]
        let nextMinPos = minPos(i, n - 1);
        swap(i, nextMinPos);
    }

    function minPos(bottom, top) {
        let m = arr[bottom];
        let index = bottom;
        for (let i = bottom + 1; i < top; i++) {
            if (arr[i] < m) {
                m = arr[i];
                index = i;
            }
            return index;
        }
    }

    function swap(a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    return arr;
}

let array = [3, 6, 1, 2, 4, 5];
console.log(selectionSort(array));