"use strict";
/* eslint-disable */

let head = {
    glasses: 1,
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};

console.log("expect 3: ", pockets.pen);
console.log("expect 1: ", bed.glasses);
console.log(head.pen);


/*
TODO - Using Object.create()
*/
let head = {
    glasses: 1
};

let table = Object.create(head);
table.pen = 3;

let bed = Object.create(table);
bed.sheet = 1;
bed.pillow = 2;

let pockets = Object.create(bed);
pockets.money = 2000;

console.log(pockets.glasses);
console.log(pockets.money);