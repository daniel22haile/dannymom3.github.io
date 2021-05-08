"use strict";

class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    bubbleSort(arr) {
            this._compCount = 0;
            this._shiftCount = 0;
            this._swapCount = 0;
            this._bubbleSort(arr, 0, arr.length - 1);
        }
        //sorts the arr from arr[lo] ... arr[hi]
    _bubbleSort(arr, lo, hi) {
        let n = hi - lo + 1;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                this._compCount++;
                if (arr[j] > arr[j + 1]) {
                    this._swapElements(arr, j, j + 1);

                }
            }
        }
    }

    selectionSort(arr) {

        this._selectionSort(arr, 0, arr.length - 1);
    }
    _selectionSort(arr, lo, hi) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        let n = hi - lo + 1;
        for (let i = 0; i < n; i++) {
            let minPos = this._minPos(arr, i, n - 1);
            this._swapElements(arr, i, minPos);
        }
    }
    _minPos(arr, lo, hi) {
        let m = arr[lo];
        let index = lo;
        for (let i = lo + 1; i <= hi; i++) {
            this._compCount++;
            if (arr[i] < m) {
                m = arr[i];
                index = i;
            }
        }
        return index;
    }

    //todo - just for demo purpose
    _shellSortForDemo(arr) {
        let size = arr.length;
        let h = 1;
        // find largest value of h
        while (h <= size / 3)
            h = h * 3 + 1;
        while (h > 0) { // decreasing h, until h=1
            //h-sort //insertion on the array with gap = h
            for (let i = h; i < size; i++) {
                let temp = arr[i];
                let j = i;
                while (j >= h && arr[j - h] > temp) {
                    arr[j] = arr[j - h];
                    j -= h;
                }
                arr[j] = temp;
            }
            h = (h - 1) / 3;
        }
    }
}
exports.ArraySorter = ArraySorter;