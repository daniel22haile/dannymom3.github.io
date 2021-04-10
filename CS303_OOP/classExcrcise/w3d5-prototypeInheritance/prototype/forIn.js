"use strict";

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys only returns own keys
//console.log(Object.entries(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit)
    console.log(prop); // jumps, then eats