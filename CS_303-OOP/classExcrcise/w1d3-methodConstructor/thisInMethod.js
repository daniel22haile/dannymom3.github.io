"use strict";

function sayHi() {
    console.log(this);
}
sayHi(); //TODO -- WITH "use strict" --> undefined

//TODO --but without "use strict", the following global object will appear
/*
Object[global] {
    global: [Circular],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
}

*/