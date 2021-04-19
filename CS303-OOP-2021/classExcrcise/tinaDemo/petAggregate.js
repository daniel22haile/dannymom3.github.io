"use strict";

let pets = ["dog", "chicken", "cat", "dog", "cat", "chicken", "cat"];

function aggregate(arr) {
    return arr.reduce(function(obj, pet) {
        if (!obj[pet]) {
            obj[pet] = 1;
        } else {
            obj[pet]++;
        }
        return obj;
    }, {});
}

let petCounts = aggregate(pets);
console.log(petCounts); //{ dog: 2, chicken: 2, cat: 3 } -- key : value pair