"use strict";
const prompt = require("prompt-sync")();
let options = {
    title: "Menu",
    // width: 100,
    // height: 200
};

// { sourceProperty: targetVariable }
//let { width: w = 100, height: h = 300, title } = options;

// width -> w
// height -> h
// title -> title



let { width = prompt("width?"), title = prompt("title?") } = options;
console.log(title); // Menu
console.log(width); // 100
console.log(title); // 200