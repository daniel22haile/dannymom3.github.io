"use strict";

let userName = "John";

function showMessage() {
    userName = "Daniel";
    let message = "Hello " + userName;
    console.log(message);
}

console.log(userName);
showMessage();
console.log(userName);