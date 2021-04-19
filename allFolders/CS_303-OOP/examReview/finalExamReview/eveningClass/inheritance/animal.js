"use strict";

function Animal() {
    this.eats = true
};

function Rabbit(name) {
    Animal.call(this)
    this.name = name;
}

Rabbit.prototype = Animal.prototype;
let rabbit = new Rabbit("white Rabbit");

console.log(rabbit.eats); //true
console.log(Animal.prototype); //animal {}
console.log(Rabbit.prototype); //animal {}
console.log(Rabbit.prototype.constructor); //[Function: Animal]
console.log(Animal.prototype.constructor); //[Function: Animal]