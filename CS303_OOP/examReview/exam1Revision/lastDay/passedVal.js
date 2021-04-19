"use strict";

let bob = 10;

function bill(bob, jim) {
    jim = bob * 2;
    return jim;
}

let jim = bob * 2; // 20
console.log(jim); // 20
console.log(bill(jim, bob)); //40