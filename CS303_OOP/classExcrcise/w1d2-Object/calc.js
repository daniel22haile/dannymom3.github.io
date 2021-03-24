"use strict";
const prompt = require("prompt-sync")();

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("a? ", 0);
        this.b = +prompt("b? ", 0);
    }
};
calculator.read();
console.log("sum is: ", calculator.sum());
console.log("product is: ", calculator.mul());