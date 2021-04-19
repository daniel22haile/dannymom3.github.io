"use strict";

function makeCounter() {
    let count = 0; //TODO -- 
    return function(increment) {
        if (increment === undefined) {
            count = count + 1;
        } else {
            count = count + increment;
        }
        if (increment > 3) {
            return "warning: increment was by value greater than 3 "
        } else {
            return count; //TODO - if we don't return count we won't see anything
        }
    }
}

const counter = makeCounter();
console.log(counter(undefined));
console.log(counter());
console.log(counter(2));
console.log(counter(10));
/*
Now modify makeCounter so that the callback it returns accepts an argument for the increment value. 
It should also return a warning string whenever it has been incremented by a value greater than 3. E.g.,
    
const mycounter = makeCounter();
    
myCounter(10); //will return "Warning: increment was by value greater than 3"
    
where x is the current count value as normal.
    
Also, your counter should still handle the case where it is 
called with no argument and increments by 1 as normal.
    
You can write this in vscode or an editor and then copy paste here.
    
*/