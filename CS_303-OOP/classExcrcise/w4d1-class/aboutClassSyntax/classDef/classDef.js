"use strict";

/*
todo -> What is a class?
So, what exactly is a class? That’s not an entirely new language-level entity, as one might think.
Let’s unveil any magic and see what a class really is. That’ll help in understanding many complex aspects.
In JavaScript, a class is a kind of function.

Here, take a look:
*/

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
console.log(typeof User); //function

/*
What class User {...} construct really does is:
Creates a function named User, that becomes the result of the class declaration.
The function code is taken from the constructor method (assumed empty if we don’t write such method).
Stores class methods, such as sayHi, in User.prototype.

After new User object is created, when we call its method, it’s 
taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.


Todo - use of class in javascript
Classes serve as templates to create new objects. The most important thing to remember: 
Classes are just normal JavaScript functions and could be completely replicated without using
the class syntax. It is special syntactic sugar added in ES6 to make it easier to declare and inherit complex objects.

==>There are other differences, we’ll see them soon.

Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
That’s good, because if we for..in over an object, we usually don’t want its class methods.
Classes always use strict. All code inside the class construct is automatically in strict mode.
Besides, class syntax brings many other features that we’ll explore later.
*/