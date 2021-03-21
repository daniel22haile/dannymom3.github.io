"use strict";


function calcTip() {
    let subtotalElem = document.getElementById('total');
    let tipElem = document.getElementById('tip');
    let totalElem = subtotal * tipElem / 100;
    let subtotal = subtotalElem + totalElem;
    let tip = subtotal - subtotalElem;
    let total = tip;
    let myTip = '$' + total;
    document.getElementById("total") = myTip;
}

window.onload = () => {
    document.getElementById("btn").onclick = calcTip;
};

// function okayClick() {
//     let btn = document.getElementById("go");
//     btn.className = "awesome";
// }