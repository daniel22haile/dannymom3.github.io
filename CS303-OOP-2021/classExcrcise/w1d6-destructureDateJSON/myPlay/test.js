"use strict";
let [myName = "Guest", lName = "Haile"] = ["Daniel", "Getahun"]; //destructuring assignment -- replace gest with Daniel, and Haile with Getahun
console.log(myName);
console.log(lName);

//({ title, width, height } = { title: "menu", width: 200, height: 300 });
//console.log(title);


let date = new Date("2017-01-09");
console.log(date);
let start = Date.now();
console.log(start);

for (let i = 0; i < 10000; i++) {
    let dosome = Math.pow(i, 3);
}
let end = Date.now();
console.log(`The loop took ${end -  start}`); //subtruct numbers not date