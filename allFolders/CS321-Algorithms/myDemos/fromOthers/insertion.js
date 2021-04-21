function insertionSort(arr) {
    let i, len = arr.length;

    for (i = 1; i < len; i++) {
        let element = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > element) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = element;
    }
    return arr;
}

let array = [6, 5, 3, 4, 2, 1, 7];
console.log(insertionSort(array));