"use strict";

function selectionSort(arr) {

    for (let wall = 0; wall < arr.length - 1; wall++) {
        //find smallest number
        //wall - index, points at first number behind "wall"

        let indexOfSmallest = wall;
        for (let j = wall + 1; j < arr.length; j++) {
            if (arr[indexOfSmallest] > arr[j]) {
                indexOfSmallest = j;
            }
        }
        //smallest element is on indexOfSmallest
        //swap
        let temp = arr[wall];
        arr[wall] = arr[indexOfSmallest];
        arr[indexOfSmallest] = temp;
    }

    return arr;
}

let array = [2, 1, 5, 3, 6, 4];
console.log(selectionSort(array));