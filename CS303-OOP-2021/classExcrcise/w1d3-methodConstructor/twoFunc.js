"use strict";

/*
➢Exercises
    
       ➢Two functions – one object
            ➢Hint:  If a function returns an objectthen new returns that object instead of ‘this’

            Is it possible to create functions A and B such as new A()==new B()?

            Yes, it’s possible.

If a function returns an object then new returns it instead of this.
So they can, for instance, return the same externally defined object obj:

*/

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}
console.log(new A() === new B()); //true