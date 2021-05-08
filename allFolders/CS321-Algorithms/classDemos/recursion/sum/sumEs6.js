"use strict";

const sumIntegers = i => {
    if (i === 0) {
        return i;
    }
    return i + sumIntegers(i - 1);
}

console.log(sumIntegers(6));


//TODO - NOTE
/*
factorial(5); // step 1
5 * factorial(4); // step 2
5 * 4 * factorial(3); // step 3
5 * 4 * 3 * factorial(2); // step 4
5 * 4 * 3 * 2 * factorial(1); // step 5
5 * 4 * 3 * 2 * 1; // step 6
*/