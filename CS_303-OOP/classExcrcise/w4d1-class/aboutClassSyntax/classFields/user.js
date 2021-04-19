"use strict";
/*
TODO - “Class fields” is a syntax that allows to add any properties.
For instance, let’s add name property to class User:
*/

//Class fields
class User {
    firstName = "Daniel";
    lastName = "Haile";

    sayHi() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}
let user = new User();
user.sayHi();
//OR   new User().sayHi();

//TODO - Note
/*
So, we just write " = " in the declaration, and that’s it.

The important difference of class fields is that they are set on individual objects, not User.prototype:

class User {
  name = "John";
}

let user = new User();
console.log(user.name); // John
console.log(User.prototype.name); // undefined

We can also assign values using more complex expressions and function calls:

class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
console.log(user.name); // John
*/