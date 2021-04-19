"use strict";

// //TODO -????
// // function sum(arr) {
// //     let count = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         count += arr[i];
// //     }
// //     return count;
// // }
// // let arrr = [1, 2, 3, 4, 5];
// // let mySum = sum();
// // console.log(mySum)(arrr)



// // function b() {
// //     function a() {
// //         console.log(x);
// //     }
// //     ///const x = 10;
// //     a();
// //     let x = 9;
// // }
// // const x = 20;
// // b();

// // let phrase = "Hello";
// // // let user;
// // if (true) {
// //     let user = "Daniel"; //Error
// // }
// // console.log(user);

// //TODO - COUNTING NUMBER OF PARAMAETERS IN THE FUNCTION
// function f1(a, b, c, ...z) {};

// function f2(a, b) {};
// console.log(f1.length);

// //TODO -- COUNT PROPERTY IN THE FUNCTION

// function sayHi() {
//     function counter() {
//         counter.count++;
//         console.log("hi");
//     }

//     // sayHi.counter++;
//     counter.count = 0;
//     return counter;
// }
// let counting = sayHi();
// counting();
// counting();
// counting();

// console.log(sayHi.counter);

let phrase = "Hello";
if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}
sayHi();



function tenClock() {
    clearInterval(timerId);
}
setTimeout(tenClock, 10000);