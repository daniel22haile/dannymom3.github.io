"use strict";


/*
TODO - Methods are not “free”

As we’ve known before, generally functions are “free”, not bound to 
objects in JavaScript. So they can be copied between objects and called with another this.

The very existence of [[HomeObject]] violates that principle, because 
methods remember their objects. [[HomeObject]] can’t be changed, so this bond is forever.

The only place in the language where [[HomeObject]] is used – is super.
 So, if a method does not use super, then we can still consider it free and 
 copy between objects. But with super things may go wrong.

Here’s the demo of a wrong super result after copying:
*/

let animal = {
    sayHi() {
        console.log(`I'm an animal`);
    }
};

// rabbit inherits from animal
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi();
    }
};

let plant = {
    sayHi() {
        console.log("I'm a plant");
    }
};

// tree inherits from plant
// let tree = {
//     __proto__: plant,
//     sayHi: rabbit.sayHi // (*)
// };

// tree.sayHi(); // I'm an animal (?!?)

//TODO - Correction
let tree = {
    __proto__: plant,
    sayHi: plant.sayHi // (*)
};

tree.sayHi(); // I'm a plant (?!?)