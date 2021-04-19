"use strict";

function f(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

class User extends f("Hello") {}

new User().sayHi(); // Hello
/*
Here class User inherits from the result of f("Hello").
That may be useful for advanced programming patterns when we use functions to
 generate classes depending on many conditions and can inherit from them.
 */