//"use strict";
let text = "42xyz";
let text1 = "x42";
let integer = parseInt(text, 10);
let integer1 = parseInt(text1, 10);
console.log(integer);
console.log(integer1);


let myText = "4.32gshs";
console.log(parseFloat(myText));

function circumference(radius) {
    if (isNaN(parseFloat(radius))) {
        return 0;
    } else {
        return parseFloat(radius) * 2.0 * Math.PI;
    }
}
let r = "2.k32gsggggg9";
console.log(circumference(r));


let usingPlus = "100x";
let strNum = "100";
console.log(+usingPlus); //NaN
console.log(Number(usingPlus)); //NaN
console.log(+strNum); //100
console.log(Number(strNum)); //100

console.log(108..toFixed);
console.log(108..toString); //String

let str = "Witdget with id";
console.log(str.endsWith("id")); //endsWith  -->true ----startsWith --> false
console.log(str.includes("id")); //true
console.log(str.includes("bye")); //false

console.log("i am danny".includes("danny")); //true
console.log("this is me".includes("id")); //false


//-------------------------------------
// let str11 = "Hello"; //TODO -- ERROR WITH "use strict" and undefined without "use strict"
// str11.test = 5;

// console.log(str11.test);