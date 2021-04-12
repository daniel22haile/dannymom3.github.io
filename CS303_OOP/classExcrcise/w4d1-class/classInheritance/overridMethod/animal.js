"use strict";
/*
Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or 
extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide "super" keyword for that.

    -> super.method(...) to call a parent method.
    -> super(...) to call a parent constructor (inside our constructor only).

For instance, let our rabbit autohide when stopped:
*/

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
/*

Now Rabbit has the stop method that calls the parent super.stop() in the process.
*/

/*
Arrow functions have no super

As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super.

If accessed, it’s taken from the outer function. For instance:
*/
class Rabbit extends Animal {
    stop() {
        setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
    }
}

/*
The super in the arrow function is the same as in stop(), so it works as intended. 
If we specified a “regular” function here, there would be an error:
*/

// Unexpected super
setTimeout(function() { super.stop() }, 1000);