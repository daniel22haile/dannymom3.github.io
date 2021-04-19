"use strict";

function Counter() {
    let count = 0;

    this.up = function() {
        //TODO - due to the post increment 
        //the first counter starts with 1
        /*
Both nested functions are created within the same
outer Lexical Environment, so they share access to
the same count variable:
        */
        return count++;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up()); // 
console.log(counter.up()); // 
console.log(counter.down()); //