"use strict";

function countProps(users) {
    let count = 0;
    for (let user in users) {
        count++;
    }
    return count;
}


let users = {
    name: "Danny",
    age: 28,
    myId: 1111,
    "nick name": "Zest",
    status: "single",
};
console.log(countProps(users));

//for ...in loop ---> iterates over the key
// for (let user in users) {
//     console.log(user);
// }

//for...of loop
// for (let use of users) {
//     console.log(`${use} : ${users[use]}`);
// }

// for (let use of users) {
//     console.log(`${users[use]}`);
// }