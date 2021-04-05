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

function makeBank() {
    const myBank = {
        transactionDB: [],
    };
    return function() {
        return myBank;
    }
}

const myBank = makeBank()();
myBank.transactionDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
];

myBank.checkId = function(id) {
    const foundCustmr = myBank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
};

myBank.getBalance = function(id) {
    const customer = this.checkId(id);
    const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
    return balance
}

myBank.saveTransaction = function(id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
}
myBank.debit = function(id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
        console.log("Insufficient balance. Please try again !");
    } else {
        amount = amount * -1;
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}

myBank.credit = function(id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else {
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}
myBank.totalBalance = function() {
    const custArr = this.transactionDB;
    let sum = 0;
    for (const customer of custArr) {
        const id = customer.custID;
        const custBalance = this.getBalance(id);
        sum += custBalance;
    }
    return sum;
}

console.log(`Total balance should be: ${myBank.totalBalance()}`);
myBank.credit(1, 20);
myBank.debit(1, 1000);
console.log(`The total should now : ${myBank.totalBalance()}`);