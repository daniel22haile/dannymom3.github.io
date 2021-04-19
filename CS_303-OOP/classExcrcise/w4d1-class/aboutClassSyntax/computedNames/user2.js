"use strict";



class User {
    name = "John";

    ["say" + "Hi"]() {
        console.log(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); // Hello, John!