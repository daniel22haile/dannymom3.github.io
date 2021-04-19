"use strict";

let animal = {
    eats: true
};

function Rabbit(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit", 2015); //  rabbit.__proto__ == animal
const rabbit2 = new Rabbit("long ear", 2010);

console.log(rabbit.eats);
console.log(rabbit);
console.log(rabbit2);
console.log(rabbit.__proto__ == animal);

console.log(Rabbit.prototype == animal);
console.log(rabbit.prototype == animal);
console.log(rabbit.prototype == Rabbit);

Rabbit.prototype.calcAge = function() {
    const date = new Date();
    const now = date.getFullYear();

    console.log(now - this.birthYear);
}
rabbit.calcAge();