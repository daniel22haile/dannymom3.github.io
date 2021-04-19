"use strict";


// function foo() {
//     console.log(this);
// }
// const bob = {
//     log: function() {
//         console.log(this);
//     }
// };


// console.log(this);
// console.log("--------------")
// foo();
// bob.log();

//"use strict"; 
function a() {
    console.log("---2----")
    console.log(this); //global object
}
const b = {
    dog: 'fido',
    log: function() {
        console.log("---3----")
        console.log(this);
    }
}
console.log("---1----")
console.log(this); // this generally is window object
a(); // a() is called by global window object in non-strict mode b.log(); // log() is called by a object
let mylog = b.log;
mylog();