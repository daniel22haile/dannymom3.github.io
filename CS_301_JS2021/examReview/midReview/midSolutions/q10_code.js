"use strict";

/**
 * Q10. write a program that keeps on asking input from the user and prints
 * it back to the console until user enters 'stop' as an input
 */

const prompt = require("prompt-sync")();

let input = +prompt("Enter your command: ");

// do {
//     input = input.toLowerCase;
//     input = prompt("Enter your command: ");
//     console.log(`You're entered ${input}: `)
// } while (input !== "stop");

// console.log("Exiting from do while loop...");

//OR
//Method 2

while (input !== 7) {
    //input = input.toLowerCase;

    if (input < 10 && input > 1) {
        input = +prompt("Enter your number: ");
    }
}
console.log("Exiting from while loop...")