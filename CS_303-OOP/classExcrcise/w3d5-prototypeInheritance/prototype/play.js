"use strict";

// let animal = {
//     eats: true,
//     walk: function() {

//         console.log("Hey Rabbit, teach me how to jump?")
//     }
// };
// let bigCat = {
//     run: true,
//     walk: function() {
//         console.log("Rabbit! Bounce-bounce!");
//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit = {
//     __proto__: bigCat
// };



// rabbit.walk();

// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.walk();
animal.walk();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping);
// undefined (no such property in the prototype)