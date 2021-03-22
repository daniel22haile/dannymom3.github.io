"use strict";

// function showMessage(from, text) {
//     from = "*" + from + "*";
//     console.log(from + ":" + text);
// }
// let from = "Ann";
// showMessage(from, "Hello");

// console.log(from);

function sayHi() {
    console.log("Hello");
}

const myHi = sayHi();
//console.log(sayHi);
// console.log(myHi);

function higherOrder() {
    return sayHi();
}
higherOrder(); //Hello



//function sumVal(arr) {

for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }

}

//}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(sumVal(matrix));
let tot = 0;
for (let matr of matrix) {
    tot += matr;
}
console.log(tot);