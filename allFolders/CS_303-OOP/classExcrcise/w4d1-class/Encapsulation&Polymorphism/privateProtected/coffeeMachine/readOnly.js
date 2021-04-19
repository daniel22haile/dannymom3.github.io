"use strict";
/*
Read-only “power”
For power property, let’s make it read-only. 
It sometimes happens that a property must be set at creation 
time only, and then never modified.
That’s exactly the case for a coffee machine: power never changes.
To do so, we only need to make getter, but not the setter:
*/

class CoffeeMachine {
    // ...
    constructor(power) {
        this._power = power;
    }
    get power() {
        return this._power;
    }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
//coffeeMachine.power = 25; // Error (no setter)