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
            this._insertionSort(arr, 0, arr.length - 1); // call the _insertion method
            return arr;
        }
        //TODO -- selection sort method
    selectionSort(arr) {
        this._compCount = 0; //comparision counter
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            let temp = arr[i];
            let j = i;
            for (let k = i + 1; k < n; k++) {
                this._compCount++;
                if (arr[k] < temp) {
                    temp = arr[k];
                    j = k;
                    this._swapElements(arr, j, i);
                }
            }
        }
        return arr;
    }

    //TODO -- bubble sort method
    bubbleSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        this._bubbleSort(arr, 0, arr.length - 1); // call the _bubbleSort method
        return arr;
    }
    _bubbleSort(arr, low, high) {
        let n = high - low + 1;
        //this._compCount = 0; //comparision counter
        for (let i = 0; i < n; i++) {
            this._compCount++;
            for (let j = 0; j < n - 1; j++) {
                this._compCount++;
                if (arr[j] > arr[j + 1]) {
                    this._swapElements(arr, j, j + 1);
                }
            }
        }
        return arr;
    }

    //TODO - print the sorted entire array
    insertion(arr) {
        this._insertionSort(arr, 0, arr.length - 1)
    }

    //TODO - sorts the array from arr[lower], arr[lower + 1]... arr[upper]
    _insertionSort(arr, lower, upper) {
        let size = arr.length;
        let temp = 0;
        let j = 0;
        for (let i = lower + 1; i <= upper; i++) {
            temp = arr[i];
            j = i;
            this._compCount++;

            while (j >= lower + 1 && temp < arr[j - 1]) {
                arr[j] = arr[j - 1]; // shift right
                j--;
                this._compCount++;
                this._shiftCount++;
            }
            arr[j] = temp; // place in sorted position    
        }
        return arr;
    }

}


exports.ArraySorter = ArraySorter;