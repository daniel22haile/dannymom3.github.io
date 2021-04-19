"use strict";

function sum() {

    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    result;
}

console.log(sum(1, 2, 3, 4, 5)); //TODO - (1, 2, 3, 4, 5) because arguments is not array, it's array like