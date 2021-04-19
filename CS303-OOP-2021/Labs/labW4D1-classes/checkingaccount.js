"use strict";
/* global Account  */

const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */
class CheckingAccount extends Account {
    /**
     * 
     * @param {number} overdraft 
     * @param {number} num 
     */
    constructor(overdraft, num) {
        super(num);
        this._overdraft = overdraft;
    }

    /**
     * 
     * @param {number } draft 
     */

    setOverDraft(draft) {
        this._overdraft = draft;
    }

    /**
     * @returns {number} the overdraft value
     */

    getOverDraft() {
        return this._overdraft;
    }
}


let check = new CheckingAccount(22, 423);

console.log("The over draft is " + check.getOverDraft());

















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
exports.CheckingAccount = CheckingAccount;