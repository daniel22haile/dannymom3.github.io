"use strct";
let x = 1;
let y = "one";
let z = false;
let u;

console.log(x + y); //"1one"
console.log(z < x); //true
console.log(x + z); //1
console.log(x * y); //NaN

x++;
console.log(x); //2
console.log(x--); //2

y += z;
console.log(typeof u); //undefined
console.log(typeof x); //number
console.log(typeof y); //string
console.log(typeof z); //boolean
console.log(y); //"onefalse"