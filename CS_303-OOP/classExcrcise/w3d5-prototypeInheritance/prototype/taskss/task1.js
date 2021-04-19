"use strict";

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // ? true -- taken from rabbit

delete rabbit.jumps;

console.log(rabbit.jumps); // ? null -- taken from animal

delete animal.jumps;

console.log(rabbit.jumps); // undefined -- thre is no such property anymore
//eithr in rabbit or its parent -- animal