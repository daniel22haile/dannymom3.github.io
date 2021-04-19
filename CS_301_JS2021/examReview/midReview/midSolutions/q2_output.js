"use strict";

let score = 99;

let grade;
if (score >= 92) {
    grade = 'A';
}
//TODO -- watchout! --without else, there is a big difference
if (score >= 85) {
    grade = 'B';
}

console.log(grade); //B