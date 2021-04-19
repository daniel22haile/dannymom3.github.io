"use strict";

function Dog(name) {
    this.name = name;
    this.walk = function() {
        console.log(this.name + ' is walking . . ');
    }
}
let myDog = Dog('Candy'); //-----value of my dog is undefined-------
myDog.walk(); //-----------------------