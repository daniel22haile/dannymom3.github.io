"use strict";

function makeAccount() {
    let count = 0;
    return function(account, value) {
        if (account === "add")
            count += value;
        if (account === "debit")
            count -= value;
    }


}
const account1 = makeAccount();
console.log(account1("add", 10));
// account1("add", 10);
// account1("add", 10);
// account1("debit", 10);
account1("debit", 10);

// account1("add", 10);