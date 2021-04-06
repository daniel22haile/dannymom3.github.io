"use strict";
/*eslint-disable */

function makeAcount() {
    const bank = {};

    let transactionDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] }, // balance = 20
        { customerId: 2, customerTransactions: [10, 10, -10] }, // balance = 10
        { customerId: 3, customerTransactions: [5, -5, 55] }, // balance = 55
    ];

    bank.getBalance = function(id) {
        const customer = transactionDB.find(c => c.customerId === id);
        let balance = 0;
        //console.log(customer);
        //balance = customer.customerTransactions.reduce((acc,e)=>acc+e);
        for (const trans of customer.customerTransactions) {
            balance += trans;
        }
        return balance;
    };

    bank.debit = function(id, amount) {
        let balance = this.getBalance(id);
        if (amount < 0) {
            console.log("Invalid amount. Please enter positive amount !");
        } else if (amount > balance) {
            console.log("Insufficient balance. Please try again !");
        } else {
            this.saveTransaction(id, amount);
        }
    };

    bank.credit = function(id, amount) {
        let balance = this.getBalance(id);
        if (amount < 0) {
            console.log("Invalid amount. Please enter positive amount !");
        } else {
            this.saveTransaction(id, amount);
        }
    };

    bank.saveTransaction = function(id, amount) {
        const customer = transactionDB.find(c => c.customerId === id);
        customer.customerTransactions.push(amount);
    };

    bank.bankBalance = function() {
        let totalBalance = 0;
        for (const trans of transactionDB) {
            totalBalance += this.getBalance(trans.customerId);
        }
        return totalBalance;
    };
    return bank;
}

let banks = makeAcount();
// console.log(transactionDB);

console.log("85", banks.bankBalance());
banks.credit(1, 20); //40
banks.debit(1, 50); //
console.log("105", banks.bankBalance());