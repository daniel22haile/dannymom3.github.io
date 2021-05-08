const myArr = require("./arraySorter"); //todo--> ./ means in the same directory
const sorter = new myArr.ArraySorter();

let arr = [4, 8, 9, 0, 3, 2, 7, 8, 8];
console.log("-----Bubble sort----")
sorter.print(arr);
sorter.bubbleSort(arr);
sorter.print(arr);
console.log(`compare count in bubble sort is ${sorter.keyComparisons()}`);
console.log(`Number of swaps in bubble sort is ${sorter.numSwaps()}`);

console.log("-----Bubble bottom-top sort----");
let arrBubble = [7, 8, 3, 2, 0, 1, 5, 8];
sorter.print(arrBubble);
sorter._insertionSort(arrBubble, 2, 6);
sorter.print(arrBubble);

let arr1 = [4, 8, 9, 0, 3, 2, 7, 8, 8];
console.log("-----Insertion sort----")
sorter.print(arr1); //TODO -- just simply print the entire array
sorter.insertionSort(arr1);
sorter.print(arr1); //Todo - after insertion sort
console.log(`compare count is ${sorter.keyComparisons()}`);
console.log(`Number of shifts after insertion sort is ${sorter.numShifts()}`);


console.log("-----Insertion bottom-top sort----");
let arr2 = [7, 8, 3, 2, 0, 1, 5, 8]; //expected: [7, 8, 0, 1, 2, 3, 5, 8];
sorter.print(arr2);
sorter._insertionSort(arr2, 2, 6); //TODO - this will sort the array from index 2 to index 6
sorter.print(arr2);


let arr3 = [12, 24, 4, 5, 3, 9, 8, 66, 7];
console.log("-----Selection sort----");
sorter.print(arr3);
sorter.selectionSort(arr3);
sorter.print(arr3);
console.log(`compare count in selection sort is ${sorter.keyComparisons()}`);
console.log(`Number of swaps in selection sort is ${sorter.numSwaps()}`);