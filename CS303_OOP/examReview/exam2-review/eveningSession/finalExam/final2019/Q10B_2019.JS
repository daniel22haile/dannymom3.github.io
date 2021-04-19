"use strict";
/*
10b.  Use the constructor to create a new  account object.  
Make a deposit of 100, thenwithdrawal of 50, then log the balance to the console.
*/

const anAccount = new MakeAccount();
anAccount.deposit(100);
anAccount.withdraw(50);
console.log("expecting 50: " + anAccount.balance());

/*
Repeat 10a and 10b, except this time use a JavaScript class 
instead of a functionconstructor.  Instead of having a private 
variable holding the balance you will need to have aproperty for the balance.  
Use the _ convention to indicate that the _balance 
property should notbe directly accessed.  Use the same three method names.
*/

class MakeAccount {
    constructor() {
        this._balance = 0;
    }

    withdraw(amt) { this._balance = this._balance - amt; }
    deposit(amt) { this._balance = this._balance + amt; }
    balance() { return this._balance; }
}

const anAccount = new MakeAccount();
anAccount.deposit(100);
anAccount.withdraw(50);
console.log("expecting 50: " + anAccount.balance());