"use strict";

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        // this.name = name;
        super(name); //todo -- this is my answer
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // OK
console.log(rabbit.name);