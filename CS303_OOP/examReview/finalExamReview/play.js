"use strict";

class User {
    constructor(name) { this.name = name; }
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi);
// the code of the sayHi method --> [Function: sayHi]


// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
// console.log(Object.getOwnPropertyNames(User));
const sam = new User("Sam");
// and the name property is in the object
console.log(Object.getOwnPropertyNames(sam)); // name



class User {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
let fred = new User();
console.log(fred); //User { name: 'Anonymous' }
console.log(fred.__proto__); //User {}
console.log(User.prototype); //User {}
fred.sayHi();
let bob = new User("Bob");
console.log(bob); // Hello, Bob!
bob.sayHi();