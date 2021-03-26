"use strict";

const { resourceLimits } = require("node:worker_threads");

const prompt = require("prompt-sync")();

let userName = "John";

function showMessage() {
    userName = "Daniel";
    let message = "Hello " + userName;
    console.log(message);
}
console.log(userName); //John --> before function call
showMessage();
console.log(userName); //Daniel --> after function call


//--------------------------------------------------------------------------
let from = "Anne";

function showMessage1(from, text) {
    from = "*" + from + "*";
    console.log(from + ":" + text);
}
showMessage1(from, "Hello");
console.log(from); //which one Anne or *Anne* ?
//--------------------------------------------------------------------------
function showMesg(from1, text = "no text is given") { //text = "no text is given" --> is default value
    from1 = "*" + from1 + "*";
    console.log(from1 + ":" + text)
}
let from1 = "hel";
showMesg(from1); //no text is passed

//--------------------------------------------------------------------------
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        //I think confirm() is working on html for alert() --> not here
        // return confirm("Do you have permission from your parents?");
        return ("Do you have permission from your parents?");
    }
}

let age = +prompt("How old are you? ", 18);
if (checkAge(age)) {
    console.log("Access granted!");
} else {
    console.log("Access denied!");
}

//--------------------------------------------------------------------------
function showPrimes(num) {
    nextPrime: for (let i = 2; i < num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }
        console.log(i);
    }
}
let num = 21;
console.log(showPrimes(num));

//--------------------------------------------------------------------------

function showMessage(text) {
    if (text === undefined) {
        text = "empty message";
    }

    console.log(text);
}

showMessage(); // empty message
//--------------------------------------------------------------------------
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
//console.log(firstName ? ? lastName ? ? nickName ? ? "Anonymous"); // Supercoder
//--------------------------------------------------------------------------
let height = 0;

console.log(height || 100); // 100
//console.log(height ? ? 100); // 0

function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?");
}

function minOfTwo(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

let num11 = 3;
let num22 = 7;
console.log(minOfTwo(num11, num22));

function minOfTwo(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function minOfTwo(num1, num2) {
    return num1 < num2 || num2; //true, if num1 is less than num2
}

function pow(base, exponent) {
    let result = base;
    for (let i = 1; i < exponent; i++) {
        result *= base;
    }
    return result;
}