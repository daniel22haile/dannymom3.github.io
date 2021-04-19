"use strict";

/*
We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/

let animal = {
    run() {
        // this.eat = true;
        // this.full = true;
        this.full = "I got a command from rabbit to run!";
        console.log(this.full);
    }
};

let rabbit = {
    eat() {
        console.log("This is rabbit, how can I help you?")
    },
    __proto__: animal
};

rabbit.eat();
rabbit.run();

/*
TODO - Answer is rabbit
That’s because "this" is an object before the dot, so rabbit.eat() modifies rabbit.
Property lookup and execution are two different things.
The method rabbit.eat is first found in the prototype, then executed with this=rabbit.
*/