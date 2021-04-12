"use strict";
/* global Account require  */
const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for the account
     * @param {number} int means for interest rate
     */
    constructor(number, int) {
        super(number);
        this._interest = int;
    }

    /**
     * @returns {number} interest rate
     */
    getInterest() {
        return this._interest;
    }

    /**
     * 
     * @param {number} newInterest is the new Interest rate
     * @returns {undefined} resets the interest property
     */
    setInterest(newInterest) {
        this._interest = newInterest;
    }



}

const testSavingsAcc = new SavingsAccount(1222, 5);
console.log("interest rate: " + testSavingsAcc.getInterest());
testSavingsAcc.deposit(1000);
console.log("balance is 1000: " + testSavingsAcc.getBalance());
console.log(testSavingsAcc);






/* global exports */
exports.SavingsAccount = SavingsAccount;