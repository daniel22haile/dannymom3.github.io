"use strict";

function greet(greeting) {
    console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
    name: 'John',
    age: 24,
};
const jane = {
    name: 'Jane',
    age: 22,
};
greet("Hello") //how to solve the problem???????? here you go!!
    //1.how to use call 
greet.call(jane, 'Hello');
//2.how to use apply instead of call
greet.apply(jane, ['Hello']);
//3.how to use bind instead of apply
let result = greet.bind(jane, 'Hello')
result() // attention don't forget to call the function in case of bind