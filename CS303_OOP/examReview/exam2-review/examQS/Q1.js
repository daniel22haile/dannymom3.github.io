"use strict";

//write an additional code 

function foo(bar, abc, xyz) {
    if (bar < 100) {
        return abc(bar);
    } else {
        return xyz(bar);
    }
}

function apple(value) {
    return value * 2;
}

function banana(value) {
    return value * 3;
}

console.log(foo(100, apple, banana));
console.log(foo(90, apple, banana));