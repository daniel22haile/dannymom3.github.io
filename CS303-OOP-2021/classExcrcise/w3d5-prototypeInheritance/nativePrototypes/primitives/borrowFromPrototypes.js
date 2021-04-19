"use strict";
/*
That’s when we take a method from one object and copy it into another.
Some methods of native prototypes are often borrowed.
For instance, if we’re making an array-like object, we may want to copy some Array methods to it.

E.g.
*/
let obj = {
    0: "welcome",
    1: "sevenUP teams group!",
    length: 2,
};

obj.join = Array.prototype.join;
console.log(obj.join(" to "));
/*
It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property. 
It doesn’t check if the object is indeed an array. Many built-in methods are like that.
Another possibility is to inherit by setting obj.__proto__ to Array.prototype, so all Array methods are automatically available in obj.
But that’s impossible if obj already inherits from another object. Remember, we only can inherit from one object at a time.
Borrowing methods is flexible, it allows to mix functionalities from different objects if needed.
*/