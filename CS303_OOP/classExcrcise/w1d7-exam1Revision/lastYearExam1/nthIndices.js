"use strict";

function ind(str) {
    let newArr = [];
    let value = str.split(" ");
    for (let i = 0; i <= value.length; i++) {
        let count = 0;
        for (let j = 0; j < value.length; j++) {
            if (i === value[j].length)
                count++;
        }
        newArr.push(count);
    }
    return newArr
}
console.log(ind("Today is a great day"));