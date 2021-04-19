"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
module.exports = { makeCounter, inArray, makeArmy, Counter, sum, byField, inBetween };

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // 0
// console.log(counter2()); // 1

//Yes, they have independent outer Lexical Environments, each one has its own count.



function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function
            console.log(i); // should show its number
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
// Now the code works correctly
army[0](); // 0
army[5](); // 5
army[9](); // 9





function Counter() {

    let count = 0;
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1


/*Both nested functions are created within the same outer Lexical Environment,
 so they share access to the same count variable.
*/



let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}
name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? Hi, pete.


//Filter inBetween
function inBetween(a, b) {
    return function(x) {
        return (x >= a && x <= b);
    };
}

//Filter inArray
function inArray(arr) {
    return function(num) {
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) return true;
        }
        return false
    }
}

// let arr = [1, 2, 3, 7, 5, 6, 7];

// let result = arr.filter(inBetween(3, 6));
// let result1 = arr.filter(inArray([7, 2, 10]));

// console.log(result); //[3, 5, 6]
// console.log(result1); //[2, 7, 7]




let phrase = "Hello";
if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi(); // error.

// The function sayHi is declared inside the if, so it only lives inside it.


{
    let x = 1;

    function func() {
        console.log(x); // ?
        let x = 2;
    }
    func(); //error.....Cannot access 'x' before initialization.
}



function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

// console.log(makeCounter())


function byField(value) {
    return function(a, b) {
        return a[value] > b[value] ? 1 : -1;
    }
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
let sortByName = users.sort(byField('name'));
// let sortByAge = users.sort(byField('age'));
// console.log(sortByName);
// console.log(sortByAge);


//TODO - sum with closure
function sum(num1) {

    return function(num2) {
        return num1 + num2
    };
}
// console.log(sum(4)(16)); // 20



function makeWorker() {
    let name = "Pete";

    return function() {
        // console.log(name);
    };
}

let name = "John";
// create a function
let work = makeWorker();
work(); // what will it show? pete. 
/*
    Because The work() function in the code below gets name
    from the place of its origin through the outer lexical environment reference
    */