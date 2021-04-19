"use strict";
/*
As we know, all objects normally inherit from Object.prototype and
 get access to “generic” object methods like hasOwnProperty etc.

For instance:
*/
class Rabbit {
    constructor(name) {
        this.name = name;
    }
}
let rabbit = new Rabbit("Rab");
// hasOwnProperty method is from Object.prototype
console.log(rabbit.hasOwnProperty('name')); // true
/*
But if we spell it out explicitly like "class Rabbit 
extends Object", then the result would be different from a simple "class Rabbit"?

What’s the difference?
First, let’s see why the latter code doesn’t work.
The reason becomes obvious if we try to run it. 
An inheriting class constructor must call super(). Otherwise "this" won’t be “defined”.

So here’s the fix:
*/
class Rabbit1 extends Object {
    constructor(name) {
        super(name); // need to call the parent constructor when inheriting
        //this.name = name;
    }
}

let rabbit1 = new Rabbit1("Rab");
console.log(rabbit.hasOwnProperty("name")); // true