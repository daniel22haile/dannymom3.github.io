"use strict";

// function sayHi() {
//     console.log('Hello');
// }

// setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
}
//TODO - using arrow function
setTimeout(() => console.log('took, 4 secs'), 4000);
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John