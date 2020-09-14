// //?Depending on whether you have use strict or not, the result may be: 1. undefined (no strict mode)
//? 2. An error (strict mode).
//? Why? Let’s replay what’s happening at line (*) :
//? 1. When a property of str is accessed, a “wrapper object” is created. 2. In strict mode, writing into it is an error.
//? 3. Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line   has no trace of the property.
//! This example clearly shows that primitives are not objects.
//! They can’t store additional data.

//#1. Can I add a string property
/**
 * checks if possible to add strings?
 * @param {string} string - the given string trying to add with the number
 * @param {number} number - the given number trying to add with the given string
 * @return {}  - no return value
 */
let str = "Hello";
str.test = 5; // (*)
console.log(str.test);
//#2. Sum numbers from the visitor
/**
 * using unary plus before prompt
 * the unary plus changes to number from string
 * @param {a} number - enter the first number
 * @param {b} number - enter the second number
 * @return {number} sum - returns the sum of the two numbers
 */
//?Note the unary plus + before prompt . 
//?It immediately converts the value to a number.
//! Otherwise, a and  b would be string their 
//!sum would be their concatenation, that is: .
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
console.log("The sum is: " + a + b);

//#3. Create a function readNumber which prompts for 
// a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering 
// an empty line or pressing “CANCEL”. In that
// case, the function should return null .

/**
 * Function
 * prompt an infinite number untill the user entering an empty line or pressing "CANCEL"
 */
//? The solution is a little bit more intricate that it could 
//? be because we need to handle null /empty lines.
//? So we actually accept the input until it is a “regular number”. 
//? Both (cancel) and empty line also fit that condition, because in 
//? numeric form they are   .
//? After we stopped, we need to treat null and empty line 
//? specially (return null ), because converting them 
//? to a number would return 0 .
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}
console.log(`Read: ${readNumber()}`);

//!#4.An occasional infinite loop
//!This loop is infinite. It never ends. Why?
/**
 * Infinite loop
 * evade equality checks when working with decimal fractions.
 */
//?None of them is exactly 10 .
//?Such things happen because of the precision losses 
//?when adding fractions like 0.2 . 
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2)
        console.log(i);
}

//!#5.The built-in function Math.random() creates a random value 
//!from 0 to 1 (not including 1 ).

//!Write the function random(min, max) to generate a random floating-point
//! number from min to max (not including  max ).
/**
 * function
 * @param {number} min - the minimum random number 
 * @param {number} max - the maximum random number
 */
//We need to “map” all values from the interval 0...1 into values 
//from min to max . 
//That can be done in two stages:
//? 1. If we multiply a random number from 0...1 by , then 
//? the interval of possible values increases 0..1 to .
//? 2. Now if we add min , the possible interval becomes from min to max .
function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

//!#6 Create a function randomInteger(min, max) that generates a random integer number from 
//! min to max including both min and max as possible values.
//! Any number from the interval min..max must appear with the same probability.
/**
 * Function - random integer
 * @param {number} min - the minimum random number
 * @param {number} max - the maximum random number
 */
//The simplest, but wrong solution would be to generate a value 
//from min to max and round it:
//The function works, but it is incorrect. 
//The probability to get edge values min and max is two times less than any other.
//If you run the example above many times, 
//you would easily see that 2 appears the most often.
//That happens because Math.round() gets random numbers 
//from the interval 1..3 and rounds them as follows:
//? 1. If we multiply a random number from 0...1 by , then 
//? the interval of possible values increases 0..1 to .
//? 2. Now if we add min , the possible interval becomes from min to max .

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
console.log(randomInteger(1, 3));

// The correct solution
// There are many correct solutions to the task. One of them is to adjust 
// interval borders. To ensure the same intervals, we can generate values
//  from 0.5 to 3.5 , thus adding the required probabilities to the edges:
function randomInteger(min, max) {
    // now rand is from (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
console.log(randomInteger(1, 3));

//?An alternative way could be to use Math.floor for 
//?a random number from min to max+1 :

function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInteger(1, 3));