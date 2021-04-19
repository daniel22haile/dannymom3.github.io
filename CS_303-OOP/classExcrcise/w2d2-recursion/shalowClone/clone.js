"use strict";
let a, b;

a = {
    firstName: "Daniel",
    phone: {
        area: 206,
        number: 80594,
    }
};
b = {...a };
console.log(b);

b.phone.area = "Changed";
console.log(b);
console.log(a);