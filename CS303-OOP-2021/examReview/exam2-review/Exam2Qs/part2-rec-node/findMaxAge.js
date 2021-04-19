"use strict";

function findMaxAge(arr) {
    let maxAge = arr.map(element => element.age)
        .reduce((max, value) => (max > value ? max : value), 0);

    return maxAge;
}

let peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 20 }, { name: "Lucy", age: 3 }]
let maximumAge = findMaxAge(peopleArray);
console.log(maximumAge);