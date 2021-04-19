"use strict";

function showArgs() {

    // borrow join from array and call in the context of arguments
    console.log([].join.call(arguments, " - "));
}
showArgs("John", "Pete", "Alice"); // John - Pete - Alice

//Because join resides in Array.prototype, we can call it from 
//there directly and rewrite it as:

function showArgs() {
    console.log(Array.prototype.join.call(arguments, " - "));
}

//That's more efficient, because it avoids the creation of an extra 
//array object []. On the other hand, it is longer to write.