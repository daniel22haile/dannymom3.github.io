"use strict";
/*
10a. Write a constructor function ‘MakeAccount’ that returns a bank
 account object.

 1.The bank account object has three methods:  withdraw, deposit, and balance.
 2.The account should have a private 
   variable, balance, which is accessed by the threemethods.  
   The private variable should not be accessible by code external to the object.
 3.The balance method will return the value of the balance private variable.
 4.The withdraw and deposit methods will deduct or increase the balance private variable.
*/

function MakeAccount() {
    let balance = 0;
    this.withdraw = function(amt) { balance = balance - amt; },
        this.deposit = function(amt) { balance = balance + amt; },
        this.balance = function() { return balance; };
}

const anAccount = new MakeAccount();
anAccount.deposit(100);
anAccount.withdraw(50);
console.log("expecting 50: " + anAccount.balance());