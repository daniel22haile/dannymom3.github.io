"use strict";

class Animal {}
class Rabbit extends Animal {}

// for statics
console.log(Rabbit.__proto__ === Animal); // true

// for regular methods
console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true