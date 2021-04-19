"use strict";

const Person = function(fName, bYear) {
    this.firstName = fName;
    this.birthYear = bYear;
};
const danny = new Person("Daniel", 1992);
console.log(danny);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function authomatically return {}

const zest = new Person("Mike", 1994);
console.log(zest);

console.log(danny instanceof Person); //true
console.log(zest instanceof Person); //true

let dan = "DannyMan";
console.log(dan instanceof Person); //false

//prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function() {
    const date = new Date();
    const now = date.getFullYear();
    console.log(`Current year is ${now}`);
    console.log(now - this.birthYear);
}
danny.calcAge();
zest.calcAge();

//each object has a special property 
console.log(danny.__proto__);
console.log(danny.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(danny));
console.log(Person.prototype.isPrototypeOf(zest));
console.log(Person.prototype.isPrototypeOf(Person));


Person.prototype.species = "Homo Sapiens";
console.log(danny.species, zest.species);

console.log(danny.hasOwnProperty("firstName"));
console.log(danny.hasOwnProperty("species"));