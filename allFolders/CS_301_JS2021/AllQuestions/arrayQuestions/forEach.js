"use strict";

function square(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
}


let arr = [1, 2, 3, 4];

// arr.forEach(square);

console.log(square(arr));


//OR
//arr.forEach(nums) => console.log(nums * nums); ????