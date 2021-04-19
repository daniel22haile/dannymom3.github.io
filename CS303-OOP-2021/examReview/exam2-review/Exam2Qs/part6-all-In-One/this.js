"use strict";

function foo() {
    console.log(this);
}
const bob = {
    log() {
        console.log(this);
    }
};
console.log(this); // this generally is window object 
foo(); //foo() is called by global window object 
bob.log(); //log() is called by the object, bob