"use strict";
// let obj1 = {
//     fName: "Daniel",
//     lName: "Haile"
// }

// let obj2 = {
//     fName: "Mike",
//     lName: "Desta"
// }
// let array = [obj1, obj2];

// array.forEach(function(value, index) {
//     console.log(fName.value + " " + lName.value + " " + index);
// });

// function helper(value, index) {
//     return value * index;
// }

// console.log(helper[10, 20, 30, 40], 4)
function proOdd(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            product *= arr[i];
        }
    }
    return product;
}

console.log(proOdd([1, 2, 1, 4, 3, 2, 6]))