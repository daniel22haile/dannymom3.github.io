"use strict";

function Person(name) {
    console.log('Person1 this: ', this); //________________________
    this.name = name;
    console.log('Person2 this: ', this); //________________________
}

function Doctor(name, department) {
    console.log("3: ", this); //________________________
    Person.call(this, name, department);
    console.log("4: ", this); //________________________
    this.dept = department;
}
Doctor.prototype.report = function() {
    return "medical report"
};

function Surgeon(name, department) {
    console.log("5 :", this); // ________________________
    Doctor.call(this, name, department);
    console.log("7: ", this); //________________________
}
Surgeon.prototype.operate = function() {
    return 'operation performed.'
};
Surgeon.prototype.__proto__ = Doctor.prototype;
let surg1 = new Surgeon("Fred", "Cardiology");
console.log("8: ", surg1.dept); // ________________________
console.log("9: ", surg1.name); //________________________
console.log("10: ", surg1.report()); // ________________________
console.log("11: ", surg1); // ________________________
console.log("12: ", surg1.__proto__); //________________________
console.log("13: ", surg1.prototype); //________________________
console.log("14: ", Surgeon.__proto__); //________________________
console.log("14.5: ", Surgeon.prototype); //________________________
console.log("15: ", Surgeon.prototype.__proto__); // ________________________