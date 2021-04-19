"use strict";

class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return; //return nothing
        }
        // this.name = value; OR
        this._name = value;
    }
}

let user = new User("Daniel");
console.log(user.name);

user = new User(""); //Name is too short