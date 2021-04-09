"use strict";

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user1 = new User("Daniel");
let user2 = new User("Mike");

console.log(user1); // User { name: 'Daniel', isAdmin: false }
console.log(user2); // User { name: 'Mike', isAdmin: false }