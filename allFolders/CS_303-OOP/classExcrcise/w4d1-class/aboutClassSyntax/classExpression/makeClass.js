"use strict";


function makeClass(phrase) {
    //declare a class and return it
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

let user = makeClass("hello");
new user().sayHi();