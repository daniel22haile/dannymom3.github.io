"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();
/*
TODO - The result is an error. invisible sayHi()

The function sayHi is declared inside the if, so it only
lives inside it. There is no sayHi outside.

*/