"use strict";

let bigOb = {
    isSleeping: true,
}
let animal = {
    walk: function() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep: function() {
        this.isSleeping = true;
    },
    __proto__: bigOb
};
let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
// modifies rabbit.isSleeping
rabbit.sleep(); //what is the call doing here__________
console.log(rabbit.isSleeping); //_________
console.log(animal.isSleeping) //_________
animal.sleep() //what is the call doing here____________
console.log(animal.isSleeping) //________
console.log(bigOb.isSleeping) //__________
console.log(rabbit.__proto__ === animal) //_________________
console.log(rabbit.__proto__.__proto__ === animal.__proto__) //________
console.log(rabbit.__proto__ === Object) //_________________
console.log(rabbit.__proto__.__proto__.__proto__ === Object.prototype) //_________________
console.log(rabbit.__proto__.__proto__.__proto__.__proto__ === Object.prototype.__proto__) //_________________
console.log(rabbit.__proto__.__proto__.__proto__.__proto__ === null) //_________________