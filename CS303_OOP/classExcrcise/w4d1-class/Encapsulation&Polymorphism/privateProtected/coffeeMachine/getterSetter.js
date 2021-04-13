"use strict";
/*
Getter/setter functions
Here we used getter/setter syntax.
But most of the time get.../set... functions are preferred, like this:
*/

class CoffeeMachine {
    _waterAmount = 0;
    setWaterAmount(value) {
        if (value < 0) value = 0; //throw new Error("negative water is invalid entry"); //value = 0;
        this._waterAmount = value;
    }
    getWaterAmount() {
        return this._waterAmount;
    }
}
//create the coffee machine and water
let coffeeMachine = new CoffeeMachine();
coffeeMachine.setWaterAmount(100);
coffeeMachine.setWaterAmount(-10);
console.log(coffeeMachine.getWaterAmount());
console.log(coffeeMachine._waterAmount);

new CoffeeMachine().setWaterAmount(100);