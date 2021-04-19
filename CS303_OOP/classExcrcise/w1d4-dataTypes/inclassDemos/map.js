"use strict";

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(
    function(element, ind, arr) {
        const newItem = "" + ind + ": " + element.length + " array is: " + arr;
        return newItem;
    });

console.log(lengths); // 5,7,6

//modify so that it logs array with index: item.length instead of just item.length
//console.log("expect 0: 5, 1: 7, 2: 6", lengths);

//TODO -- OR short version of the above -- same output
/*
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((element, ind, arr) => "" + ind + ": " + element.length + " array is: " + arr);
console.log(lengths); // 5,7,6
*/