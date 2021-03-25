"use strict";


/*
let calculator = {
    value1: 0,
    value2: 0,
    getValues: function(operand1, operand2) {
        this.value1 = operand1;
        this.value2 = operand2;
    },

    sum: function() {
        const tot = this.value1 + this.value2;
        return tot;
    },
    mul: function() {
        const product = this.value1 * this.value2;
        return product;
    }
};
*/

let calculator = {

    getValues: function(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    },

    sum() {
        const tot = this.operand1 + this.operand2;
        return tot;
    },
    mul() {
        const product = this.operand1 * this.operand2;
        return product;
    }
};

calculator.getValues(5, 10);
console.log("The sum is: ", calculator.sum());
console.log("The product is: ", calculator.mul());