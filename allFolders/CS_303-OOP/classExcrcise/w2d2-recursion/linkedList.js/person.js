"use strict";
// let person = {
//     firstName: "Daniel",
// };

// person.phoneNumber = { //TODO - add property to the object -- phone number with its properties of area code and number
//     areaCode: 206,
//     number: 8059400,
// };

//console.log(person);

let linnkedList = {
    value: 1,
};

linnkedList.next = {
    value: 2,
};
linnkedList.next.next = {
    value: 22,
};

// linnkedList.next.next.next.next = { //TODO - ERROR !, due to extra next
//     value: 1222,
// };
linnkedList.next.next.next = {
    value: 1222,
};
console.log(linnkedList);