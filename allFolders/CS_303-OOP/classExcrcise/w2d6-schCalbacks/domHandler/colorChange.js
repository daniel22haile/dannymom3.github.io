"use strict";
const changeMyColorButton1 = document.getElementById("btn1");
const changeMyColorButton2 = document.getElementById("btn2");

const changeMmyTextBoxyColorButton2 = document.getElementById("“txtbox1");


changeMyColorButton1.onclick = changeMyColor;
changeMyColorButton2.onclick = changeMyColor;
myTextBox.onmouseover = changeMyTextColor;

function changeMyColor() {
    this.style.backgroundColor = "blue";
}

function changeMyTextColor() {
    this.style.backgroundColor = "red";
}