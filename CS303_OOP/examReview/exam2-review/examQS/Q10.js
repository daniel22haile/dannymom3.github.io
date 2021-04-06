"use strict";

// Return the youngest person's age

let john = { name: "john", surname: "smith", age: 20 };
let pete = { name: "pete", surname: "hunt", age: 18 };
let danny = { name: "danny", surname: "hunt", age: 22 };

let people = [john, pete];


function getYoungerAge(array) {

    let result = array.reduce((previous, current) => previous < current.age ? previous : current.age);
    return result;
}
console.log(getYoungerAge(people));
//TODO - related, print the name of younger