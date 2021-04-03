"use strict";

let a, b, c, d;
a = { a: 1, b: 2, c: 3, d: 44 };
b = {...a };
b.c = 300;
console.log(b);
a.c = 100;
console.log(a);


d = [...a, b, ...c];
console.log(d);