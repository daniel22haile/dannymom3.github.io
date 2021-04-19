"use strict";

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
console.log(rabbit.eats); // true



//TODOD 1 - We added one more string (emphasized). What will console.log show now?
/*
answer - true.
The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but 
it does not affect the existing ones.
*/
function Rabbit2() {}
Rabbit2.prototype = {
    eats: true
};

let rabbit2 = new Rabbit2();
Rabbit2.prototype = {};
console.log(rabbit2.eats); // ?


//TODO 2 …And if the code is like this (replaced one line)?
/*
answer - false.
Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, 
it’s still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.
*/
function Rabbit3() {}
Rabbit3.prototype = {
    eats: true
};

let rabbit3 = new Rabbit3();
Rabbit3.prototype.eats = false;
console.log(rabbit3.eats); // ?


//TODO 3 - And like this (replaced one line)?
/*
answer - true.
All delete operations are applied directly to the object. 
Here delete rabbit.eats tries to remove eats property from rabbit, but 
it doesn’t have it. So the operation won’t have any effect.
*/
function Rabbit4() {}
Rabbit4.prototype = {
    eats: true
};

let rabbit4 = new Rabbit4();
delete rabbit4.eats;
console.log(rabbit4.eats); // ?



//TODO 4 - the last variant
/*
answer - undefined.
The property eats is deleted from the prototype, it doesn’t exist any more.
*/

function Rabbit5() {}
Rabbit5.prototype = {
    eats: true
};

let rabbit5 = new Rabbit5();
delete Rabbit5.prototype.eats;
console.log(rabbit5.eats); // ?