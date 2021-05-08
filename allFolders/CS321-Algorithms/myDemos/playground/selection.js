class ArraySorter {
    constructor() {
        this._compCount = 0; //comparision counter
        this._swapCount = 0; //swap counter
        this._shiftCount = 0; //shift counter
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
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i = 0; i <= last; i++) {
            res = res + arr[i];
            if (i < last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");

    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        this._insertionSort(arr, 0, arr.length - 1);
        return arr;
    }
    selectionSort(arr) {
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            let temp = arr[i];
            let j = i;
            for (let k = i + 1; k < n; k++) {
                if (arr[k] < temp) {
                    temp = arr[k];
                    j = k;
                    this._swapElements(arr, j, i)

                }
            }
        }
        return arr;

    }
    bubbleSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            this._compCount++;
            this._shiftCount++;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    this._swapElements(j, j + 1);
                    this._compCount++;
                    this._shiftCount++;
                }
            }
        }
        return arr;
    }
    _insertionSort(arr, lo, hi) {
        let size = hi - lo + 1;
        for (let i = 1; i < size; i++) {
            let k = lo + i;
            let temp = arr[k];
            this._compCount++;
            while (0 < k && temp < arr[k - 1]) {
                arr[k] = arr[k - 1]; // shift right
                k--;
                this._compCount++;
                this._shiftCount++;
            }
            arr[k] = temp; // place in sorted position    
        }
    }

}

let arr = [3, 8, 4, 7, 9, 1]
let check = new ArraySorter();
console.log(check.selectionSort(arr))
console.log(check.bubbleSort(arr))