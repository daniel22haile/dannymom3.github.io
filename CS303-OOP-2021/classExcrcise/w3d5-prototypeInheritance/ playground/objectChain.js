"use strict";

let head = {
    glasses: 1,
    //__proto__: Object.prototype
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2
};
bed.__proto__ = table;

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(head.__proto__ === Object.prototype); // true -- why?
console.log(head.__proto__ === Object.__proto__); //false -- why?
console.log(pockets.pen);
console.log(bed.glasses);