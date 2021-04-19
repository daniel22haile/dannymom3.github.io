"use strict";

class Animal {
    name = "Anamal";
    constructor() {
        console.log(this.name);
    }
}

class Rabit extends Animal {
    name = "Rabit";

}

new Animal();
new Rabit();
/*
Here, class Rabbit extends Animal and overrides name field with its own value.
There’s no own constructor in Rabbit, so Animal constructor is called.
What’s interesting is that in both cases: new Animal() and new Rabbit(), the alert in the line (*) shows animal.
In other words, parent constructor always uses its own field value, not the overridden one.

What’s odd about it?
*/