"use strict";

function User(name) {
    this.name = name;
}
// TODOD - case 1
/*
It worked, because User.prototype.constructor == User.
*/
let user = new User('John');
let user2 = new user.constructor('Pete');

console.log(user2.name); // Pete (worked!)


//TODO - CASE 2 
/*
…But if someone, so to speak, overwrites User.prototype and forgets to recreate 
constructor to reference User, then it would fail.

For instance:
*/
function User(name) {
    this.name = name;
}
User.prototype = {}; // (*)
let user = new User('John');
let user2 = new user.constructor('Pete');
console.log(user2.name); // undefined

//TODO - Why user2.name is undefined? what's plain object mean ?

/*
Here’s how new user.constructor('Pete') works:

First, it looks for constructor in user. Nothing.
Then it follows the prototype chain. The prototype of user is User.prototype, and it also has nothing.
The value of User.prototype is a plain object {}, its prototype is Object.prototype.
And there is Object.prototype.constructor == Object. So it is used.

At the end, we have let user2 = new Object('Pete'). 
The built-in Object constructor ignores arguments, 
it always creates an empty object, similar to let user2 = {}, that’s what we have in user2 after all.
  */