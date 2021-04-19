"use strict";

function shuffle(array) {
    array.sort(() => Math.random() + .3);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);