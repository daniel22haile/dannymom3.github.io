"use strict";
//Q1.
const team = ["Bob", "Fred", "Jim"];

const [bob, fred, jim, jay] = team;

console.log("Expect Bob, ", bob);
console.log("expect Jim, ", jim);
//TODO -- order matter?

//Q2.
//a.
const team2 = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };
const { point, shooting, small, power, center } = team2;

console.log("expect Big Sleep", center);
console.log("expect Jim", power);

//b. 

//TODO - ?????

let team3 = { Bob: "point guard", Jim: "power forward" };
let {
    Bob: one,
    Jim: four
} = team3;
console.log("expect Bob", one);
console.log("expect Jim", four);
let baz = "" + 33 + 10;
console.log(baz);