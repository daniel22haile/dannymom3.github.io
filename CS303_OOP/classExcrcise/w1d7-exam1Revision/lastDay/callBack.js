"use strict";

function squareOrCube(value, square, cube) {
    if (value < 10) {
        return square(value);
    } else {
        return cube(value);
    }
}
console.log(squareOrCube(10, square, cube)); //1000
console.log(squareOrCube(9, square, cube)); //81

function cube(num) {
    return Math.pow(num, 3);
}

function square(num) {
    return Math.pow(num, 2);
}