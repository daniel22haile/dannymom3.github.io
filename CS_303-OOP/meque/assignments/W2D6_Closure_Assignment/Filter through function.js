"use strict";

/////////////////////////////////Filter inBetween
function inBetween(a, b) {
  return function (x) {
    return (x >= a && x <= b);
  };
}

///////////////////////////////Filter inArray

function inArray(arr) {

  return function (num) {
    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) return true;
    }
    return false
  }
}

let arr = [1, 2, 3, 7, 5, 6, 7];

let result = arr.filter(inBetween(3, 6));
let result1 = arr.filter(inArray([7, 2, 10]));

console.log(result); //[3, 5, 6]
console.log(result1); //[2, 7, 7]