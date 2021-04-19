"use strict";

let animal = {
    eats: true,
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = animal;

let snoopy = new Dog("snoopy");
snoopy.__proto__ = animal;
console.log(snoopy.name);
console.log(snoopy.eats);