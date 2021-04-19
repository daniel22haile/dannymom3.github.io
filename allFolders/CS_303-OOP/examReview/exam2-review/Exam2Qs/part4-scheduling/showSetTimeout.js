"use strict";

let i = 0;

setTimeout(() => console.log(i), 1000); // 100000000

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
    i++;
}