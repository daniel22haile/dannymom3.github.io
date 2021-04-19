"use strict";

let john = { name: "john", surname: "smith", age: 20 };
let pete = { name: "pete", surname: "hunt", age: 20 };

let people = [john, pete];
let mapped = people.map((user, idx) => ({
    fullName: `${user.name} ${user.surname}`,
    age: `${user.age}`,
    id: `${idx + 1}`
}));
//map(function(item, index, array)) , we can get id from index
console.log(mapped);

//TODO - OUTPUT
/*
[
  { fullName: 'john smith', age: '20', id: '1' },
  { fullName: 'pete hunt', age: '20', id: '2' }
]
*/



// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     age: user.age
// }));
/*
[
    '{ FullName: john  smith,  id: 1}',
    '{ FullName: pete  hunt,  id: 2}'
]
*/

//console.log(usersMapped)