"use strict";



let animal = { name: 'default' }

function Bird(name, age) {
    this.age = age;
    this.name = name;
}
Bird.prototype.fly = function() { return this.name + ' is flying'; }
let peetee = new Bird("Peetee", 1);

console.log(peetee.age === 1); //-----------
console.log(Bird.__proto__.name === "Peetee"); //-----------  
console.log(Bird.prototype.fly() === "Peetee is flying"); //-----------
console.log(peetee.fly() === "Peetee is flying"); //-----------
console.log(peetee.__proto__.age === 12); //-----------
console.log(peetee.age === 12) //-----------

Bird.prototype = animal;
let polly = new Bird("Polly");

console.log(Bird.prototype.name === "Peetee"); //-----------
console.log(polly.__proto__ === peetee.__proto__); //-----------