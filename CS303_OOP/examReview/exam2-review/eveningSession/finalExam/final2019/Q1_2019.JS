"use strict";
/*
Design a hospital management system.In the system, we have doctors and 
patients.Doctors and patients share fname, lname and age properties and 
should not duplicatethose properties in their constructors.Patients have 
address property and doctors have branch property..We have 2 different types of 
doctors that are surgeon and physician.Surgeons have doTheSurgery method, physicians 
have makeTheTreatment method.

Implement this system by using inheritance.
You have to use​ class keyword​.You can defineother objects
if necessary.*/

class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age
    }
}

class Patient extends Person {
    constructor(fname, lname, age, address) {
        super(fname, lname, age);
        this.address = address;
    }
}

class Doctor extends Person {
    constructor(fname, lname, age, branch) {
        super(fname, lname, age);
        this.branch = branch;
    }
}

class Surgeon extends Doctor {
    constructor(fname, lname, age, branch) {
        super(fname, lname, age);
        this.branch = branch;
    }
    doTheSurgery() {

    }
}

class Physician extends Doctor {
    constructor(fname, lname, age, branch) {
        super(fname, lname, age);
        this.branch = branch;
    }
    makeTheTreatment() {

    }
}