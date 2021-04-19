"use strict";

function Box(height, width) {
    this.height = height;
    this.width = width;
}

function Widget(height, width, color) {
    // Box.call(this, height, width);
    // Box.apply(this, [height, width]);
    Box.bind(this, height, width)();
    this.color = color;
    //TODO - output --> 
    //Function { height: 100, width: 200, color: 'red' }
}

Widget.prototype = Box;
let widget = new Widget(100, 200, "red");
console.log(widget);