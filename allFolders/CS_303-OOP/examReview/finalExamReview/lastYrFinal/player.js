"use strict";

function Player(name, age) {
    this.age = age;
    this.name = name;
}
Player.prototype.play = function() {
    return this.name + ' is playing';
}
let fred = new Player("Fred", 12);
console.log(fred.age === 12); //____________________
console.log(fred.__proto__.age === 12); //____________________
console.log(Player.__proto__.name === "Fred"); //____________________
console.log(Player.prototype.play() === "Fred is playing"); // ________________
console.log(fred.play() === "Fred is playing"); // ____________________
let pete = new Player("Pete", 15);
console.log(Player.prototype.name === pete); //____________________
console.log(pete.__proto__ === fred.__proto__); //____________________