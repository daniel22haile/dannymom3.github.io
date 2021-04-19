"use strict";

let options = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height); // 200
console.log(rest.width); // 100

//TODO - HERE WE GO REST!
console.log(rest); //{ height: 200, width: 100 }