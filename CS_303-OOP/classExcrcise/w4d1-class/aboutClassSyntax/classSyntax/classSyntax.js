"use strict";

/*
In object-oriented programming, a class is an extensible program-code-template for creating objects, 
providing initial values for state (member variables) and implementations of behavior (member functions or methods).
    
In practice, we often need to create many objects of the same kind, like users, or goods or whatever.
As we already know from the chapter Constructor, operator "new", new function can help with that.
But in the modern JavaScript, there’s a more advanced “class” construct, that introduces great
new features which are useful for object-oriented programming.

THE "CLASS" SYNTAX
*/

class MyClass {
    // class methods
    constructor() {}
    method1() {}
    method2() {}
    method3() {}

}

//TODO - Example:

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

const user = new User("Daniel");
user.sayHi();

console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi); //[Function: sayHi]

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]

//TODO - Not just a syntactic sugar
/*
Sometimes people say that class is a “syntactic sugar” (syntax that is designed to 
    make things easier to read, but doesn’t introduce anything new), because we could actually declare the same without class keyword at all
    */
// TODO --> rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
    this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
    console.log(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();