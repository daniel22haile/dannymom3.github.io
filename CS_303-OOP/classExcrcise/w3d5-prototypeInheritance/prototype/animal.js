"use strict";

let animal = {
    eats: true,
    walks() {
        console.log("Animal can walk.");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

//TODO - An object may not inherit from two others.
//TODO - __proto__ is not the same as the internal [[Prototype]] property. 
//TODO - It’s a getter/setter for [[Prototype]]

/*
The __proto__ property is a bit outdated. It exists for historical
 reasons, modern JavaScript suggests that we should 
 use Object.getPrototypeOf/Object.setPrototypeOf 
 functions instead that get/set the prototype.
*/

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

//walk if taken from the prototype

//same result
rabbit.walks();
longEar.walks();

//true from animal
console.log(longEar.eats);
console.log(longEar.jumps); //from rabbit