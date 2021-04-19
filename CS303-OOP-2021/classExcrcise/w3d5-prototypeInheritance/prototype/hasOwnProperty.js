"use strict";

//const { white } = require("color-name");

let animal = {
    eats: true,
    run: true
};

let rabbit = {
    jumps: true,
    fun: true,
    __proto__: animal
};

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}