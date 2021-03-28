"use strict"
let arr = [1, 2, 15];
// the method reorders the content of arr
arr.sort();
console.log(arr); // 1, 15, 2

//Literally, all elements are converted to strings for comparisons. 
//For strings, lexicographic ordering is applied and indeed "2" > "15"

console.log(typeof {});
console.log(typeof []);

//TODO - WATCHOUT! THE FOLLOWING OUTPUTS
console.log(3 + 7 + "3");
console.log("3" + 3 + 7);
console.log("37" + 3);