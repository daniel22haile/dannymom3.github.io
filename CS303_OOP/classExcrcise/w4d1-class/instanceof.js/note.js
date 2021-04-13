"use strict";
/*
The instanceof operator allows to check whether an object belongs to a certain class. 
It also takes inheritance into account.
Such a check may be necessary in many cases. For example, it can be used for 
building a polymorphic function, the one that treats arguments differently depending on their type.
The instanceof operator

The syntax is:
*/

obj instanceof Class
/*
It returns true if obj belongs to the Class or a class inheriting from it.
For instance:
*/
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

//It also works with constructor functions:
// instead of class
function Rabbit() {}

console.log(new Rabbit() instanceof Rabbit); // true