"use strict";

let user = { name: "John" };
let admin = { name: "Daniel" };

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Daniel  (this == admin)

admin['f'](); // Daniel (dot or square brackets access the method – doesn't matter)