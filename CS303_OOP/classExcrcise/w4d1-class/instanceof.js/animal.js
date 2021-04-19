"use strict";

class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match!)