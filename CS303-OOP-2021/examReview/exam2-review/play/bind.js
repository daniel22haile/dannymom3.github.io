"use strict";

let user = {
    firstName: "Daniel",

};

function func(phrase) {
    console.log(phrase + " : " + this.firstName);
}

let funcUser = func.bind(user);
funcUser("Hello");