"use strict";


function ageAboveTen(arr) {
    let result = arr.filter(item => item.age > 10);
    return result;
}

let peopleArray = [
    { name: "Sam", age: 5 },
    { name: "William", age: 20 },
    { name: "Lucy", age: 9 },
    { name: "Lucy", age: 100 }
]
let ageGreaterTen = ageAboveTen(peopleArray);
console.log(ageGreaterTen);