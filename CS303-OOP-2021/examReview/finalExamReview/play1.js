"use strict";

// function ordinary() {
//     const arrow = () => this;
//     console.log(arrow.call('goodbye')); // 'hello'
// }
// ordinary.call('hello');

// let person = {
//     name: 'Jim',
//     sayName: () => console.log(this.name) // undefined 

// };
// person.sayName();

'use strict';

let obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this);
    }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
//TODO - Arrow functions do not have their own this.