"use strict";
let users = {
    name: "Daniel",
    age: 28,
    "he is an admin": true,
};

console.log(users.age); //28
console.log(users["he is an admin"]); //true

for (let myKey in users) {
    console.log(myKey + " : " + users[myKey]);
}


function makeUser(name, age) {
    return {
        name: "Danny",
        age: 28,
        "nik name": "zest",
    };
}

let user = makeUser("john", 30);
console.log(user.name);

for (let key in makeUser) {
    console.log(makeUser[key]);
    //TODO ---How can i access all properties from the function
}


let myUser = {
    name: "zest",
    age: 28
};
console.log(myUser.noSuchProperty === undefined); //TODO ?? WHY TRUE?
console.log("name" in myUser);
//OR 
let key = "name";
console.log(key in myUser);

let codes = {
    "49": "Germany",
    "3": "USA",
    "41": "Ethiopia",
};
for (let number in codes) {
    console.log(number + " : " + codes[number]);
}

//TODO -- Math.trunc() --> used to remove decimal part of the number
console.log(Math.trunc(Number("12.32"))); //12
console.log(Math.trunc(Number(+50))); //50
console.log(Math.trunc(Number("+50"))); //50


let obj = {
    name: "Alex",
    age: 30
};
let admin = obj;
admin.name = "Mike";
console.log(obj.name); //Mike
console.log(admin.name); //Mike

//TODO -- two independent objects are not equal
let a = { x: 2, y: 2 };
let b = { x: 2, y: 2 };
console.log(a == b); //false
console.log(a === b); //false

//TODO --an object declared as constt can be changed

const userConst = {
    name: "Zesto",
}
userConst.name = "DanZesto";
console.log(userConst.name); //TODO -- Zesto changed to DanZesto