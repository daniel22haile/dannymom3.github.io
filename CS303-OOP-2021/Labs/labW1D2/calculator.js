"use strict";
// const calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },
// };

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