"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

// const acc = require("./account.js"); //with node need the name of your file with your functions here
// const Account = acc.Account; //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount;
class Account {
    constructor(accountId, balance) {
        this.accountId = accountId;
        this.balance = balance;
    }
    computeUpdatedBalance() {
        return this.balance;
    }
}
class CheckingAccount extends Account {
    constructor(accountId, balance, monthlyFee) {
        super(accountId, balance);
        this.monthlyFee = monthlyFee
    }
    computeUpdatedBalance() {
        return this.balance - this.monthlyFee;
    }
}
class SavingsAccount extends Account {
    constructor(accountId, balance, interestRate) {
        super(accountId, balance);
        this.interestRate = interestRate;
    }
    computeUpdatedBalance() {
        return this.balance * (1 + this.interestRate);
    }
}
class Employee {
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }
    addAccount(account) {
        this.accounts.push(account);
    }
    computeUpdatedBalanceSum() {
        return this.accounts.reduce((sum, account) => sum += account.computeUpdatedBalance(), 0);
    }
}
const emp = new Employee('Daniel');
emp.addAccount(new CheckingAccount(1001, 5000.00, 25));
emp.addAccount(new CheckingAccount(1002, 2000.00, 25));
emp.addAccount(new SavingsAccount(8001, 30000.00, 0.02));
emp.addAccount(new SavingsAccount(8002, 50000.00, 0.04));
console.log(emp.computeUpdatedBalanceSum()); //Expected Result: 89550










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
// exports.Bank = Account;