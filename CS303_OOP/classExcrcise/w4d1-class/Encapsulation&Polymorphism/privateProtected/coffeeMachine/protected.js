"use strict";

class CoffeeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
        if (value < 0) {
            value = 0;
            //todo -- OR why is not working? cuz _waterAmount = 0; ??
            //console.log("invalid input. Try again!")

        }
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }
    constructor(power) {
        this._power = power;
    }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = -10; // Error: Negative water
console.log(coffeeMachine); //CoffeeMachine { _waterAmount: 0, _power: 100 }