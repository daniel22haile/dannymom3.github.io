"use strict";

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// by name (Ann, John, Pete)
let result = users.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(result);

// by age (Pete, Ann, John)
let result2 = users.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(result2);