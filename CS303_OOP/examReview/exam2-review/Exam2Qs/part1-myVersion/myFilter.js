"use strict";

function myFilter(arr, filtFunc) {
    let fillMe = [];

    for (let item of arr) {
        if (filtFunc(item))
            fillMe.push(filtFunc(item));
    }
    return fillMe;
}


function odds(value) {
    if (value % 2 !== 0) return value;
    else //do nothing
        return;
}

let newArr = [1, 2, 3, 4, 5, 6];
console.log(myFilter(newArr, odds));