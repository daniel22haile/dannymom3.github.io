"use strict";

function perimeter() {
    console.log(this); //------------{ side: 5, perimeter: [Function: perimeter] }-----------------------------
    return 4 * this.side;
}
const shape = {
    side: 5,
    perimeter: perimeter
};

shape.perimeter();


//NB:if we console.log(shape.perimeter()); --> we'll get 20


function perimeter() {
    console.log(this); //------------{ side: 5, perimeter: [Function: perimeter] }-----------------------------
    return 4 * this.side;
}
const shape = {
    side: 5,
    perimeter: perimeter
};

console.log(shape.perimeter()); //-----------20-----------------