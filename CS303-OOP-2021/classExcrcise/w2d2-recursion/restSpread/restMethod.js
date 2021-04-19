"use strict";

function sum(x, y, ...more) {
    let total = 0;
    if (more.length > 0)
        for (let item of more) {
            total += item;
        }
    console.log("Total: " + total);
    return total;
}

sum(5, 5, 5);
sum(1, 2, 3, 4);


function moreArr(x, y, ...more) {
    console.log(x);
    console.log(y);
    console.log(more);
}

moreArr(1, 2, 3, 4);