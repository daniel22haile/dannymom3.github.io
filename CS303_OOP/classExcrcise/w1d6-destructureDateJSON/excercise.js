"use strict";
//Q1.
const team = ["Bob", "Fred", "Jim"];

const [bob, fred, jim, jay] = team;

console.log("Expect Bob, ", bob);
console.log("expect Jim, ", jim);
//TODO -- order matter?

//Q2.
//a.
const team2 = {};
const { point, shooting, small, power, center } = team2;

console.log("expect Big Sleep", center);
console.log("expect Jim", power);

//b.