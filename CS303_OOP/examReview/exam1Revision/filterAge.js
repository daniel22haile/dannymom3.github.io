"use strict";
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};
let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(`soldiers length is ${soldiers.length}`); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

let arr = ["dan", "hai", "alex", "tzy"];
console.log(arr.splice(-1)); //removed tzy
console.log(arr.slice(-1)); // return alex 
console.log(arr.length) //


console.log(arr.indexOf("alex"))