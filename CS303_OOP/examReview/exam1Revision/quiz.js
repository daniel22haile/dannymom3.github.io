"use strict";

function pow(x, n) {

    if (n == 1) {

        return x;

    } else {

        return x * pow(x, n - 1);

    }

}

console.log(pow(2, 3));


//TODO - without changing the original array
function myMap(arr, cbk) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cbk(arr[i]))
    }
    return newArr
}

function mapped(value) {
    return value
}

console.log(myMap([1, 2, 3, 4, 5], mapped));