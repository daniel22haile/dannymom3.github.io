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


function filterRangeInPlace(arr, a, b) {
    let fillMe = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (!val < a || !val > b) {
            fillMe.push(val);
        }
    }
    return fillMe;
}
let arrr = [5, 3, 8, 1, 4, 5, 6, 7, 8, 9];
console.log(filterRangeInPlace(arrr), 2, 4);

let john = { name: "John", age: 29 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 40 };

let users = [john, pete, mary];

/* ... your code */
let names = users.map((item) => item.name);
let ages = users.map((item) => "name: " + item.name + ", age : " + item.age);

let averageAge = users.reduce((sum, item) => sum + item.age, 0) / users.length;

console.log(`average age is ${averageAge}`);

console.log(names); // John, Pete, Mary
console.log(ages);