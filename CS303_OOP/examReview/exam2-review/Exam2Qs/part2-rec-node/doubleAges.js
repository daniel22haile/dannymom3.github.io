"use strict";

function doubleAges(arr, func) {
    let newArr = [];

    for (let item of arr) {
        if (func(item))
            newArr.push(func(item));
    }
    return newArr;
}

function mapped(element) {
    element.age = element.age * 2;
    return element;
}

let peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }]
let doubledAge = doubleAges(peopleArray, mapped);
console.log(doubledAge);