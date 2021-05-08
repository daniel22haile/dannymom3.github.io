"use strict";

//mutual recursion - when a group of methods repeatedly call other 
//untill the base case

function isEven(n) {
    if (n === 0) return true;
    else
        return isOdd(n - 1);
}

function isOdd(num) {
    if (num === 0) return false;
    else
        return isEven(num - 1);
}

console.log(isEven(10));
console.log(isEven(11));

/*
function isOdd(num) {
  if (num === 1)
    return true;
  return !isEven(num-1);
}

function isEven(num) {
  if (num === 0)
    return true;
  return !isOdd(num-1);
} 
*/