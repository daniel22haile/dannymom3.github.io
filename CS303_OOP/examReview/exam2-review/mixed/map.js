"use strict";

let banana = {
    name: "banana",
    color: "yellow",
    price: 1
};
let apple = {
    name: "red delicious",
    color: "red",
    price: 2
};

let fruit = [banana, apple];

//Use the map function to map the users array to the following:
//  [
//     { fullName: "John Smith", id: 1 },
//     { fullName: "Pete Hunt", id: 2 },
// ]

//Hint: recall bracket versus dot notation

let fruitMapped = fruit.map(function(fruit) { return ({ fruitName: fruit.name, cost: fruit.price }) });

console.log(fruitMapped);