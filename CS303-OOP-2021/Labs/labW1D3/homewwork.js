"use strict";
/*
Homework exercises

➢Using “this” in object literal
➢Chaining
   ➢hint:  ladder.up().down()  will execute the chain from left to right
       ➢first executes ladder.up() which returns a value 
       ➢then attempts to execute a .down() method on an object returned by ladder.up()
*/

let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        this.step;
        console.log(this);
    },
};

ladder
    .up()
    .up()
    .down()
    .up()
    .down()
    .showStep();

//OR
//ladder.up().up().down().up().down().showStep(); //1