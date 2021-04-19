"use strict";

//TODO #1 -- Do the 2 timeout exercises from the Advanced working with functions > Scheduling:
//TODO       setTimeout and setInterval section of the book:
/*
Do the 2 timeout exercises from the Advanced working with functions > Scheduling: setTimeout and setInterval section of the book:
a. Output every second
    o setInterval version
    o make the numbers print out after the “from” seconds, e.g., 5 will print after
      5 seconds, then 6 in one more second, etc (this is optional – if you want extra coding practice)
    o setTimeout version (this is optional )
*/
//TODO - setInterval version
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 10);



//TODO - setTimeout version
let printNumbers = (start, end) => {
    setTimeout(() => console.log(start), 1000);
    start < end && setTimeout(printNumbers, 1000, start + 1, end);
}
printNumbers(5, 10);



// //TODO - #b. What will setTimeout show?
let i = 0;
setTimeout(() => console.log(i), 3000); // 100000000
for (let j = 0; j < 100000000; j++) {
    i++;
}
/**
 * Any setTimeout will run only after the current code has finished.
 * The i will be the last one: 100000000.
 */


//TODO - The bank question
/*
Recall the bank question from the first exam. The transactionsDB is publicly 
accessible to any code that has access to the bank object. Write a makeBank function 
that will encapsulate and return the bank object. Make the transactionsDB private by 
making it a local variable in the makeBank function instead of a property on the bank object.
*/

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