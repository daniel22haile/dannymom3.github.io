"use strict";

//setting Dog.prototype and calling new Dog below has the same effect as let snoopy = {name: "Snoopy"}; snoopy.__proto__ = animal

// let animal = {
//     eats: true
// };

// function Dog(name) {
//     this.name = name;

// }

// Dog.prototype = animal;
// let snoopy = new Dog("Snoopy");
// console.log(snoopy.eats); // true
let animal = {
    eats: true
};
let Dog = {
    name: "snoopy",
}
Dog.__proto__ = animal

alert(Dog.name === "snoopy");