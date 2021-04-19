"use strict";

let animal = {
    eat: true,
    isGood: "yes",
    walk: true,
    run: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};
let cat = {
    isGood: "yes",
}
rabbit === cat;

let bull = Object.create(animal);



console.log(rabbit.walk);
console.log(rabbit.run);
console.log(rabbit.isGood);