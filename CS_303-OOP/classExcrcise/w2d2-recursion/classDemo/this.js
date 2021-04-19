//"use strict";
/* eslint-disable */

/**
 * @returns {undefined}
 */
function sayHi() {
    this.lat = 41.00;
    this.long = -92.96;
    console.log(this);
}

sayHi(); // undefined
console.log(lat);

function setLateLog() {
    this.lat = 41.00;
    this.long = -92.96;
    console.log(this);
}

setLateLog(); // undefined
console.log(lat); //TODO - I can't access lat if I use use strict