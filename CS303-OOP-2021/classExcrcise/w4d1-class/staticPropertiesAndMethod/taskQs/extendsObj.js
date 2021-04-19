"use strict";
/*
Even after the fix, there’s still important difference in
 "class Rabbit extends Object" versus class Rabbit.
As we know, the “extends” syntax sets up two prototypes:
    1. Between "prototype" of the constructor functions (for methods).
    2. Between the constructor functions themselves (for static methods).
In our case, for class Rabbit extends Object it means:
*/
class Rabbit extends Object {}
console.log(Rabbit.prototype.__proto__ === Object.prototype); // (1) true
console.log(Rabbit.__proto__ === Object); // (2) true
//So Rabbit now provides access to static methods of Object via Rabbit, like this:

class Rabbit extends Object {}
// normally we call Object.getOwnPropertyNames
console.log(Rabbit.getOwnPropertyNames({ a: 1, b: 2 })); // a,b
/*
But if we don’t have extends Object, then Rabbit.__proto__ is not set to Object.
Here’s the demo:
*/
class Rabbit {}
console.log(Rabbit.prototype.__proto__ === Object.prototype); // (1) true
console.log(Rabbit.__proto__ === Object); // (2) false (!)
console.log(Rabbit.__proto__ === Function.prototype); // as any function by default
// error, no such function in Rabbit
console.log(Rabbit.getOwnPropertyNames({ a: 1, b: 2 })); // Error
/*
So Rabbit doesn’t provide access to static methods of Object in that case.
By the way, Function.prototype has “generic” function 
methods, like call, bind etc. They are ultimately available in both cases, because
 for the built-in Object constructor, Object.__proto__ === Function.prototype.
*/