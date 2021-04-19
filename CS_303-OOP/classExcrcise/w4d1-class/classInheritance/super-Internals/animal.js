"use strict";

/*
TODO - Super: internals, [[HomeObject]]
[[HomeObject]]

To provide the solution, JavaScript adds one more special internal property for functions: [[HomeObject]].
When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.
Then super uses it to resolve the parent prototype and its methods.

Let’s see how it works, first with plain objects:
*/

let animal = {
    name: "Animal",
    eat() { // animal.eat.[[HomeObject]] == animal
        alert(`${this.name} eats.`);
    }
};
let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() { // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
};
let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() { // longEar.eat.[[HomeObject]] == longEar
        super.eat();
    }
};
// works correctly
longEar.eat(); // Long Ear eats.
/*
It works as intended, due to [[HomeObject]] mechanics. A method, such as 
longEar.eat, knows its [[HomeObject]] and takes the parent method from its prototype. 
Without any use of this.
*/