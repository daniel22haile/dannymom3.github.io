"use strict";

function Person(name) {
    this.name = name;
}

console.log(Person);
console.log(Person.prototype);
// 
let p1 = new Person('John');
let p2 = new Person('Joe');

console.log(p1)
console.log(p2)
p1.age = 15;
console.log(p1)
console.log(p2)

//TODO - fix this code

Person.prototype.yearOfBirth = '1-15-2018';
Person.prototype.greeting = function() {
    console.log("Hi");
}
console.log("p1", p1.yearOfBirth)
console.log("p2", p2.yearOfBirth)
console.log(Person.prototype)

Object.prototype.myName = "Hi Hi";
console.log(Object);
// 
Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}

let greeting = p1.greet();
console.log(greeting);

let s = p1.toString();
console.log(s);

p2 = new Person('Jane');

p1.draw = function() {
    return "I can draw.";
};

p1.draw();
p2.draw()

console.log(p1.__proto__ === Person.prototype); // true
console.log(p1.__proto__ === p2.__proto__); // true

console.log(p1.__proto__); //exposes the [[Prototype]] that references the Person.prototype object.
console.log(Object.getPrototypeOf(p1)); //returns the prototype of a specified object
console.log(p1.constructor.prototype); // Another popular way to get the prototype linkage

let p3 = new Person("Bat");
console.log(p3.__proto__);


let animal = { eats: true };
let rabbit = { jumps: true };
rabbit.__proto__ = animal; // (*)
///we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true

//animal has methods
animal = {
    walk: function() { if (!this.isSleeping) { alert(`I walk`); } },
    sleep: function() { this.isSleeping = true; }
};
rabbit = { name: "White Rabbit", __proto__: animal };
//modifies
rabbit.isSleepingrabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping);
//undefined (no such property in the prototype)
function Rabbit() {}
Rabbit.prototype = { jumps: true };
rabbit = new Rabbit();
console.log(rabbit.constructor);