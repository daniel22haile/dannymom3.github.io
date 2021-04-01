"use strict";
/*
Create an object named bank with the following methods:
----------------------------------------------------------------------------
debit(id, amount) - deducts amount from customer transaction list, but only 
                   if the amount is less than the the current balance
----------------------------------------------------------------------------
credit(id, amount), adds positive amount to customer transaction list
----------------------------------------------------------------------------
getBalance(id) - returns current balance of that customer. The balance should be computed
                 as the sum of all recorded transaction amounts.
----------------------------------------------------------------------------
saveTransaction(id, amount) - saves this transaction amount to the customerTransaction list
                             for this customer
----------------------------------------------------------------------------
getBankBalance - returns sum of all customer balances
----------------------------------------------------------------------------



The bank object should have a transactionsDB property, which will be an array of objects containing all 
the customer objects. 

Customer objects will have properties customerId and customerTransactions, 

Example, {customerId : 123, cuustomerTransactions: [10, 50, -40]} would be one element of the array.

*/
const bank = {
    transactionsDB: [],
};

bank.transactionsDB = [
    { customerId: 1, cuustomerTransactions: [10, 50, -50] },
    { customerId: 2, cuustomerTransactions: [10, 50, -10] },
    { customerId: 3, cuustomerTransactions: [5, -5, 55] }
];

bank.debit = function(id, amount) {
    /* make sure current balance is > amount*/
    const balance = this.getBalance(id);
    if (balance, amount) {
        console.log("Insuficient balance, debit not accepted...");
    } else {
        this.saveTransacction(id, amount);
    }
}