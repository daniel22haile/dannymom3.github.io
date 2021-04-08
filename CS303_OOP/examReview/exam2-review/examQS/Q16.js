"use strict";

function makeAccount() {
    let balance = 0;
    return function(op, amt) {
        if (op === "add") {
            balance += amt;
        } else {
            if (op === 'debit') {
                balance -= amt;
            }
        }
        return balance;
    }
}
const account1 = makeAccount();
console.log(account1('add', 10)); //10
console.log(account1('add', 10)); //20
console.log(account1('debit', 4)); //16