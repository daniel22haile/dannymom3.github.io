"use strict";

function User(name) {
    console.log("1:", this);
    this.name = name;
    console.log("2:", this);
}
let tina = {};
const thisUser = User.bind(tina);
thisUser();
thisUser("Rujuan");
thisUser("Tina");
console.log("3: ", tina);
User.call(tina, "dann");
User.apply(tina, ["danny"]);
console.log("4: ", tina);

// Class Foo {
//     constructor(bar) {
//         this.bar = bar
//     }
//     let abc = "local";
// }

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//     console.log(this.name);
// };
// let fluf1 = new Rabbit("Fluffy");



// // Do all of these calls do the same thing?  (Draw the object diagram - on scratch paper)
// fluf1.sayHi();
// Rabbit.prototype.sayHi();
// fluf1.__proto__.sayHi();