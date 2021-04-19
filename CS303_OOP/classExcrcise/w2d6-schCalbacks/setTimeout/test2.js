"use strict";

function outerFunction(outerVariable) {
    console.log("outer variable", outerVariable)
    return function innerFunction(innerVariable) {
        console.log(outer2)
        console.log("inner variable", innerVariable)

    }

}
const outer2 = "hi"
const newFunction = outerFunction("testOuter")
newFunction("testInner")