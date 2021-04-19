"use strict";

function area() {
    console.log(this);
    return this.side * this.side;
}

const square1 = {
    side: 5,
    area: area,
};

square1.area(); //{ side: 5, area: [Function: area] }

console.log(square1.area())

console.log(this); //{} object