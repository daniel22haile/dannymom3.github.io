"use strict";

// function sayHi() {
//     console.log("Hello");
// }
// setTimeout(sayHi, 3000); //Hello displays after 3 seconds or after 300 milliseconds


function sayHi() {
    console.log("Hello");
    return function() {
        return function() {
            console.log("bye");
        }
    }
}

setTimeout(sayHi(), 5000); //immediately Hello, and wait untill 5 seconds for nothing display
// because  sayHi() is not call for the most inner return function