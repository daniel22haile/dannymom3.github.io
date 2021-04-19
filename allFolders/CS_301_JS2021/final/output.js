"use strict";

// case 1
let ob1 = { id: 123 };
let ob2 = { id: 123 }
let ob3 = ob2;
let x;
if (ob1 === ob2) {
    x = 5;
} else if (ob1 === ob3) {
    x = 7;
} else {
    x = 10;
}
//let x = 8; Error, x is already declared
console.log(x); // Output? ______

//CASE 2:
let ob1 = { id: 123 };
let ob2 = { id: 123 }
let ob3 = ob2;
let x;
if (ob1 === ob2) {
    x = 5;
} else if (ob1 === ob3) {
    x = 7;
} else {
    x = 10;
}
x = 6;
console.log(x); // Output? __6____


//CASE3

let ob1 = { id: 123 };
let ob2 = { id: 123 }
let ob3 = ob2;
let x = 50;
if (ob1 === ob2) {
    x = 5;
} else if (ob1 === ob3) {
    x = 7;
} else {
    x = 10;
}
x = 100000;
console.log(x); // Output? __10____

//CASE4


let ob1 = { id: 123 };
let ob2 = { id: 123 }
let ob3 = ob2;
let x;
if (ob1 === ob2) {
    x = 5;
} else if (ob1 === ob3) {
    x = 7;
} else {
    x = 10;
}

x = 20;
console.log(x); // Output? ______