"use strict";
/*
Constructors in inheriting classes must call super(...), and (!) do it before using this.
…But why? What’s going on here? Indeed, the requirement seems strange.
Of course, there’s an explanation. Let’s get into details, so you’ll really understand what’s going on.
In JavaScript, there’s a distinction between a constructor function of an 
inheriting class (so-called “derived constructor”) and other functions. 
A derived constructor has a special internal property [[ConstructorKind]]:"derived". That’s a special internal label.
That label affects its behavior with new.

    -> When a regular function is executed with new, it creates an empty object and assigns it to this.
    -> But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.

So a derived constructor must call super in order to execute its 
parent (base) constructor, otherwise the object for this won’t be created. And we’ll get an error.
For the Rabbit constructor to work, it needs to call super() before using this, like here:
*/
class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

//TODO -- needs some corrections
let rabbit = new Rabbit("White Rabbit", 10);
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10

console.log(rabbit.stop());
console.log(rabbit.run(50));