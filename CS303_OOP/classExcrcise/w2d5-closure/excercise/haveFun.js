"use strict";

function haveFun() {
    let fun = {
        myFuns: []
    }
    let i = 0;
    while (i < 3) {
        let myFunc = function() {
            console.log(`Fun : ` + i);
        }
        fun.myFuns.push(myFunc);
        i++;
    }
    return fun;
}
let anotherFun = haveFun;
let result = anotherFun();
let output1 = result.myFuns[1];
let output2 = result.myFuns[0]();
console.log(anotherFun); // __________________
console.log(result); // _______________________
console.log(output1); // _______________________
console.log(output2); // ______________________