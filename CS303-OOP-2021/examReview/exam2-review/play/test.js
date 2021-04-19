//"use strict";

// function f() {
//     console.log("1");
// }

// function f(x) {
//     console.log("2");
// }

// function f(x, y) {
//     console.log("3");
// }

// function f(x, y, z) {
//     console.log("4");
// }

// f(1);
// f(1, 2);
// f(1, 2, 3);
// f(1, 2, 3, 4);

// const abc = {
//         a: 1,
//         b: 2,
//         add: function() {
//             console.log(this.a + this.b);
//         }
//     }
//     // abc.add(); //works
// setTimeout(abc.add, 2000); //not working  //TODO- NaN
// setTimeout(function() { abc.add.call(abc) }, 2000); //works
// setTimeout(() => { abc.add.call(abc) }, 2000); //works using arrow function
// setTimeout(function() { abc.add.apply(abc) }, 2000); //works using apply

// let user = {
//     firstName: "Daniel",

//     sayHi() {
//         console.log("Hello " + this.firstName);
//     }
// }

// user.sayHi();

// setTimeout(user.sayHi, 2000); //display Hello undefined after 2 seconds
// setTimeout(user.sayHi(), 2000);//TODO - Error

// setTimeout(() => (user.sayHi.call(user)), 4000);
// setTimeout(user.sayHi.bind(user), 6000);
// setTimeout(() => user.sayHi.apply(user), 3000);


// function foo() {
//     console.log(this);
// }
// const bob = {
//     log: function() {
//         console.log(this);
//     }
// };
// foo();
// console.log(this);
// bob.log(); //{ log: [Function: log] }

// let user = {
//     firstName: "Daniel",

// };

// function func(phrase) {
//     console.log(phrase + " : " + this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser("Hello");

function area() {
    console.log(this);
    return this.side * this.side;
}

const square1 = {
    side: 5,
    area: area,
};

square1.area(); //{ side: 5, area: [Function: area] }

console.log(square1.area())

console.log(this); //{} object