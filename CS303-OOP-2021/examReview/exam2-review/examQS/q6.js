"use strict";

function sayHi() {
    console.log("Hello");
    return function() {
        console.log("bye");
    }
}
setTimeout(sayHi(), 2000);
//TODO - 2000 means in milli second, if it's 2000 seconds, it's not gonna work