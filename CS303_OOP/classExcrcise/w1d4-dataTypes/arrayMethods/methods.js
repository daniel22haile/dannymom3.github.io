"use strict";

let arr = ["I", "go", "home"];
delete arr[1];

console.log(arr[1]); //undefined, because it's gone
// arr = ["I", , "home"]; but the length is unchanged
console.log(arr.length); //3


let mySplice = arr.splice(1, 1);
console.log(mySplice);
console.log(arr.length);


let arr1 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr1.splice(0, 2);

console.log(removed); // "I", "study" <-- array of removed elements


let arr3 = ["t", "e", "s", "t"];

console.log(arr3.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(arr3.slice(-2)); // s,t (copy from -2 till the end)
console.log(arr3.length);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => console.log(`${item} is at index ${index} in --- ${array}`));

let myArr = [NaN];
console.log(myArr.indexOf(NaN)); //-1 -- due to === 
console.log(myArr.includes(NaN)); //true

//TODO -- even check
function isEven(num) {
    if (num % 2 !== 0)
        return false;
    else
        return true;
}

//TODO -- find()
let arr22 = [1, 223, 4, 65];
let result = arr22.find(item => isEven(item));
console.log(result); //4


//TODO -- filter()
let arr23 = [1, 223, 4, 65, 44, 88];
let result2 = arr23.filter(item => isEven(item));
console.log(result2); //[ 4, 44, 88 ]


let users = [
    { id: 1, name: "Daniel" },
    { id: 2, name: "Haile" },
    { id: 3, name: "Alex" }
];

let someUsers = users.filter(item => item.id > 1);
console.log(someUsers); //[ { id: 2, name: 'Haile' }, { id: 3, name: 'Alex' } ]
console.log(someUsers.length); // 2