"use strict";

/* eslint-disable */

let Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
};

let Student = function() {};

Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

let Teacher = function() {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject) {
    console.log(this.name + " is now teaching " + subject);
}




// mocha test for method describe

describe("describe", function() {
    it("returns person's age", function() {

        let me = new Student();
        assert.deepEqual(me.initialize("Daniel", 90), console.log(me.describe()), "Daniel, 90 years old.");
    });

});


// mocha test for method learn.

describe("learn", function() {
    it("print the course that a person has learned", function() {

        let me = new Student();

        assert.deepEqual(me.initialize("Daniel", 28), me.learn("Inheritance"), "Mequanint just learned Inheritance");
    });


});

// mocha test for method teach.

describe("teach", function() {
    it("print the course that a person teaches", function() {

        let teacher = new Teacher();

        assert.deepEqual(teacher.initialize("Daniel", 90), teacher.teach("class"), "Daniel is now teaching class");
    });

});