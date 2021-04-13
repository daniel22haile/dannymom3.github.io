"use strict";
/*
Getter/setter functions
Here we used getter/setter syntax.
But most of the time get.../set... functions are preferred, like this:
*/

class CoffeeMachine {
    _waterAmount = 0;
    setWaterAmount(value) {
        if (value < 0) value = 0;
        this._waterAmount = value;
    }
    getWaterAmount() {
        return this._waterAmount;
    }
}
new CoffeeMachine().setWaterAmount(100);