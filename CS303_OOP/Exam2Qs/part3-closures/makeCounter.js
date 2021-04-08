"use strict";

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}
//TODOD - 
/*
Functions counter and counter2 are created by different 
invocations of makeCounter.

So they have independent outer Lexical Environments, each 
one has its own count.
*/
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0    
console.log(counter()); // 1
console.log(counter()); // 2

console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2

//console.log(makeCounter()); // [Function]