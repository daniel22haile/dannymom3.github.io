"use strict";

function avgEvenAge(arr) {
    let result = arr.map(item => item.age)
        .filter(item => item % 2 === 0);

    let sum = result.reduce((accum, current) => accum + current, 0);

    let average = sum / result.length;
    return average;
}

let peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 20 },
    { name: "Lucy", age: 30 },
    { name: "Lucy", age: 100 }
]

console.log(avgEvenAge(peopleArray));