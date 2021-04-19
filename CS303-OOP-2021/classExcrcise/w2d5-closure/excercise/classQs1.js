"use strict";
/*
Write a function, makeCounter() that declares a local count variable and 
then returns an increment function.  Call it twice to make different 
counters, counter1 and counter2.  Do they keep independent counts?
*/
//TODO - Draw execution context for this code
/**
 * @return {Function} counter function
 */
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };

}

const counter1 = makeCounter();
const counter2 = makeCounter();
counter1();
counter1();
counter2();

console.log("expect 2", counter1());
console.log("expect 1", counter2());
//console.log("expect 2", counter1());