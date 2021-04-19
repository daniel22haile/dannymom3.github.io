"use strict";
const prompt = require("prompt-sync")();
let obj = {};

let key = prompt("What's the key1?: ", "__proto__");
obj[key] = "some value";

console.log(obj[key]); // [object Object], not "some value"!

/*
Here, if the user types in __proto__, the assignment is ignored!
That shouldn’t surprise us. The __proto__ property is special: it must be either an object or null. 
A string can not become a prototype.But we didn’t intend to implement such behavior, right?
 We want to store key/value pairs, and the key named "__proto__" was not properly saved. So that’s a bug!

 Object.create(null) creates an empty object without a prototype ([[Prototype]] is null):
*/
{
    let obj = Object.create(null);

    let key = prompt("What's the key2?: ", "__proto__");
    obj[key] = "some value";

    console.log(obj[key]); // "some value"
}