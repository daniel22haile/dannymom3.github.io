"use strict";

function Dog(name) {
    this.name = name;
    this.walk = function() {
        console.log(this.name + ' is walking . . ');
    }
}

let myDog = Dog('Candy');
console.log(myDog);
myDog.walk();




/*
TODO - fill in the blank

value of myDog is ------------?
output of myDog.walk() is ------------?

*/