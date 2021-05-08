const myArr = require("./arraySorter");
const sorter = new myArr.ArraySorter();

let arr = [2, 3, 4, 8, 9, 1, 7];
sorter.print(arr);

let array = [3, 8, 4, 7, 9, 1]
let sorter = new ArraySorter();
console.log(sorter.selectionSort(array));
console.log(sorter.bubbleSort(array));

console.log(`compare count is ${sorter.keyComparisons()}`);
console.log(`number of shift is ${sorter.numSwaps()}`);
console.log(`number of swap is ${sorter.numSwaps()}`);

console.log(`insertion ${sorter.insertionSort()}`);



function largestH(n) {
    let h = 1;
    for (h = 1; h < n; h = 3 * h + 1) {

    }
}