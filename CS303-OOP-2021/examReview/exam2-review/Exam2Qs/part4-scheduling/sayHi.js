"use strict";

function sayHi() {
    console.log("Hello");
    return function() {
        console.log("bye");
    }
}

setTimeout(sayHi(), 2000);

// setInterval(sayHi(), 2000);


// setTimeout(sayHi, 2000);

// setInterval(sayHi, 2000);