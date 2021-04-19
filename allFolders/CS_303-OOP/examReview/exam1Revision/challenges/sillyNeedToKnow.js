"use strict";

const apple = {};
const banana = {};
console.log(apple === banana); //false

const apple1 = 5;
const banana1 = 5;
console.log(apple1 === banana1); //true

const apple2 = { name: "danny", age: 28 };
const banana2 = { name: "danny", age: 28 };
console.log(apple2 === banana2); //false

const apple3 = { name: "danny", age: 28 };
const banana3 = apple3;
console.log(apple3 === banana3); //true


const apple5 = { name: "John", age: 10 };
const banana5 = apple5;
banana5.name = "alex";
banana5.age = 65;
console.log(apple5 === banana5); //true


let baz = "" + 0 + 10;


let users = [{
        name: "Daniel",
        age: 28,
    },
    {
        name: "alex",
        age: 30
    },
    {
        name: "mom",
        age: 40
    }
];

let sum = 0;
for (let key in users) {

}