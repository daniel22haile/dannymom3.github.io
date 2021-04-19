"use strict";

function mostFequentElement(arr) {

    let higher = 0;
    let repeatedNum;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > higher) {
            higher = count;
            repeatedNum = arr[i];
        }

    }
    return repeatedNum;
}
let newArr = [1, 2, 3, 3, 3, 3, 3, 4, 5];
console.log(mostFequentElement(newArr));