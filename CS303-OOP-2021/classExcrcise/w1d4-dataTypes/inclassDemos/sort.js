"use strict";

/*
change comparator function to sort in descending order, 
then change it to sort in lexicographic descending order
*/

/* eslint-disable */

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function decreasingNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

function decreasingLex(a, b) {
    a = "" + a;
    b = "" + b;
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}
let arr = [1, 15, 2];
arr.sort(compareNumeric);
console.log(arr);
arr.sort(decreasingNumeric);
console.log(arr);
arr.sort(decreasingLex);
console.log("expect [2, 15, 1]-->", arr);
/*
TODO -- NB! --> lexicographic ordering
Did you notice anything strange in the outcome?
The order became 2, 15, 1. Incorrect. But why?
The items are sorted as strings.
Literally, all elements are converted to strings for comparisons. 
For strings, lexicographic ordering is applied and indeed "2" > "15".
*/

let arrSort = [1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log(a + " <> " + b);
    return a - b;
});

console.log(arrSort);