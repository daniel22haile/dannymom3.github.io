"use strict";
//TODO - using apply
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 8);


//TODO - using bind
Function.prototype.defer = function(ms) {
    let f = this;
    return (function(...args) {
        setTimeout(() => this(...args), ms);
    }).bind(this);
};

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 8);


//TODO - using call
// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(args) {
//         setTimeout(() => f.call(this, ...args), ms);
//     }
// };

// function f(a, b) {
//     console.log(a + b);
// }

// f.defer(1000)(1, 8);


// //TODO - using wrapper or arrow function
// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//         setTimeout(() => { this, args }, ms);
//     }
// };

// function f(a, b) {
//     console.log(a + b);
// }

// f.defer(1000)(1, 8);