"use strict";

/*
Write a function ‘makeWithdraw’ which returns a function that keeps track of bank accounts.
a-) makeWithdraw should return a closure that has a private variable to 
    keep an array ofbankAccount objects.
b-) Each object in the array has properties: name, savingAccountBalance and
   checkingAccountBalance.
c-) ​When you call the closure, ​‘makeWithdraw’​, with 
    the name and withdrawal amount it will withdraw the money from the account 
    according to the rules below:
 -If checking account has enough balance, deduct the money from checking account.
 -If checking account does not have enough balance, deduct all 
   the money from checkingaccount then try to deduct the rest of 
   the money from savings account.
 -If neither checking account nor savings account has enough balance return an error.
*/

function makeWithdraw() {

    let accounts = []

    return function(name, amount) {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].name === name) {
                if (accounts[i].checkingBalance >= amount) {
                    accounts[i].checkingBalance -= amount;
                } else {
                    if ((accounts[i].savingBalance + accounts[i].checkingBalance) > amount) {
                        accounts[i].checkingBalance = 0;
                        amount -= accounts[i].checkingBalance;
                        accounts[i].savingBalance -= amount;
                    } else {
                        return 'You need to earn some money !!!'
                    }
                }
            }
        }
    }
}