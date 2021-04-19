"use stict";

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic", "Daniel Haile"];

// rest is array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
//TODO - we can name rest whatever we want just it's a variable. The main logic is the three dots
//rest = ["Consul", "of the Roman Republic"];
console.log(rest);


//TODO - default
let [firstName = "Daniel", lastName] = [];
//TODO - First name : Daniel and last Name is undefined
console.log(`First name : ${firstName} and last Name is ${lastName}`);