"use strict";


//TODO - chain map-filter
let array = [
    { "name": "Joe", "age": 17 },
    { "name": "Bob", "age": 17 },
    { "name": "Carl", "age": 35 }
];

let result = array.map(item => item.age)
    .filter((value, index, self) => self.indexOf(value) === index);

console.log(result);