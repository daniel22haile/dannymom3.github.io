"use strict";
let hamster = {

    stomach: [],
    eat(food) {
        this.stomach = [food];
        // OR this.stomach.push(food);
    }
};


// let speedy = {
//     __proto__: hamster,
//stomach: [] //TODO - SOLUTION
// };
//TODO - OR
let speedy = Object.create(hamster);

// let lazy = {
// stomach: [], //TODO -- SOLUTION
//     __proto__: hamster
// };
//todo - OR
let lazy = Object.create(hamster);
// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple


lazy.eat("banana");
// This one also has it, why? fix please.
console.log(lazy.stomach); // apple