"use strict";

let guest = "Daniel";
let admin = "Alex";

[guest, admin] = [admin, guest];
console.log(`The guest is ${guest} and admin is ${admin}`)