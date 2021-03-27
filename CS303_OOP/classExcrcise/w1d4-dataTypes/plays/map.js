"use strict";
let result = ["dani", "danny", "haile", "mom"].map(item => item.length);
console.log(result); //[ 4, 5, 5, 3 ]

let result1 = ["dani", "danny", "haile", "mom"].map((item, index) => ("index " + index + " has " + "length " + item.length));
console.log(result1);
/*
'index 0 has length 4',
'index 1 has length 5',
'index 2 has length 5',
'index 3 has length 3'
*/