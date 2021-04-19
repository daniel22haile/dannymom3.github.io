"use strict";
//TODO -- some() - at leat one condition should be satisfy to make the condition true
//TODO - every() - should satisfy all the conditions to be true
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log(arraysEqual([1, 2], [1, 2])); // true
console.log(arraysEqual([2, 1], [1, 2])); //false

function camelize(str) {
    let arr = str.split("-");
    let result = arr.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1));
    return result.join("");
}
let myStr = "background-color";
console.log(camelize(myStr));


function filterRange(arr, a, b) {
    let result = arr.filter(item => (a <= item && item <= b));
    return result;
}
let myArr = [5, 3, 8, 1];
console.log(filterRange(myArr), 1, 4);


function copySoted(arr) {
    return arr.slice().sort();
}

let strArrr = ["danny", "alex", "mek", "sami"];
console.log(copySoted(strArrr));
console.log(strArrr[0]);

function sorting(a, b) {
    a = "" + a;
    b = "" + b;
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
}

let strSoted = ["boy", "girl", "ball", "soccer"];
console.log(sorting(strSoted));