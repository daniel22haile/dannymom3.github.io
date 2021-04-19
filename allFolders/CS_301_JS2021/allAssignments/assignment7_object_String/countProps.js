"use strict";
/**
 * 
 * @param {Object} obj a given objects
 * @return {number} returns the number of object properties
 */
function countObjProperty(obj) {
    let count = 0;
    for (let prop in obj) {
        count++;
    }
    return count;
}

let car = {
    make: "Toyota",
    model: "Camry",
    speed: 80,
    owner: "notMe",
};

console.log(countObjProperty(car)); // 4