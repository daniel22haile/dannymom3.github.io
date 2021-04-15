"use strict";
/*eslint-disable*/
const abc = {
    a: 1,
    b: 2,
    add: function() {
        console.log("1+2 = 3?", this.a + this.b);
    }
}
abc.add(); //works 
setTimeout(abc.add, 2000); //problem!

setTimeout(abc.add.bind(abc), 2000); //works 
setTimeout(function() { abc.add.call(abc) }, 2000); //works 
setTimeout(function() { abc.add.apply(abc) }, 2000); //works 


var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say.call(messenger, 'John');


const car = {
    name: 'car',
    start: function() {
        console.log('Start the ' + this.name);
    }
};
const aircraft = {
    name: 'aircraft',
    fly: function() {
        console.log('Fly');
    }
};
car.start.call(aircraft);

function Box(height, width) {
    this.height = height;
    this.width = width;
}

function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}
Widget.prototype = Box;
let widget = new Widget(100, 200, 'red');

console.log(widget.height); //100

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result); //Hello John. How are you?

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let run = runner.run.bind(flyer, 20);
run();
console.log(flyer.__proto__);

class Person {
    constructor(name) {
        this.name = name
    }
    display() { console.log(this.name); }
}

class Student extends Person {
    constructor(name, entry) {
        super(name);
        this.entry = entry;
    }
    display() {
        super.display();
        console.log(this.entry);
    }
}

let student = new Student("John", "2021Feb");
student.display();
console.log(student)