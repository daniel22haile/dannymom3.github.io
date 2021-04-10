"use strict";

function Rabbit() {

}

//TODOD - by default
Rabbit.prototype = {
    constructor: Rabbit
}

console.log(Rabbit.prototype.constructor === Rabbit); //true

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); //true

let rabbit2 = new rabbit.constructor();
console.log(rabbit2.constructor === Rabbit); //true

/*
TODO - 
Every function has the "prototype" property even if we don’t supply it. 
The default "prototype" is an object with the only property constructor that points back to the function itself.
Like this:

function Rabbit() {}
 default prototype
Rabbit.prototype = { constructor: Rabbit };




TODO -- NB -- In particular, if we replace the default prototype as a whole, then
 there will be no "constructor" in it.
*/
//So, to keep the right "constructor" we can choose to add/remove properties to the 
//default "prototype" instead of overwriting it as a whole:

function Rabbit2() {}
Rabbit2.prototype.jumps = true //= {
    //jumps: true
    //};

let rabbit3 = new Rabbit2();
console.log(rabbit3.constructor === Rabbit2); // false or true?



//Or, alternatively, recreate the constructor property manually:

Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};

// now constructor is also correct, because we added it