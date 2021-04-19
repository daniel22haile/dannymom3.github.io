"use strict";

function myMap(arr, fun) {
    // let fillMe = [];

    // for (let item of arr) {
    //     //if (fun(item))
    //     let myFun = fun(item);
    //     if (myFun)
    //         fillMe.push(fun(item));
    // }
    // return fillMe;

    return arr.map(fun);
}
/*
function myFilter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let callbackResult = fn(arr[i], i);
        if (callbackResult) {
            result.push(arr[i]);
        }
    }
    return result;
}
myFilter(arr, function(value, index) {
            return value % 2 === 0;
        }
        */
let myArr = [1, 2, 3, 4, 5];
console.log(myMap(myArr));