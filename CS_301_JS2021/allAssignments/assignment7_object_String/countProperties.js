"use strict";
/*
write the function which returns number of properties of an object.
*/
/**
 * 
 * @param {Object} obj given objects
 * @returns {number} returns number of object properties
 */
function countProperties(objProps) {
    let count = 0;
    for (let props in obj) {
        count++;
    }
    return count;

}
let obj = {
    color: "red",
    size: "big",
    age: 28,
    name: "Daniel",
    "class statur": "Master's",
};

console.log(countProperties(obj));