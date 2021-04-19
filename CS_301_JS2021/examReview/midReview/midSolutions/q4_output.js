"use strict";

let score = 88;

let grade;

if (score >= 92) {
    grade = 'A';
} else if (score > 85) {
    grade = 'B';
} else {
    grade = 'C';
}

grade = 'NC'; //TODO -- OUTSIDE THE LOOP WILL PRINT

console.log(grade); //NC