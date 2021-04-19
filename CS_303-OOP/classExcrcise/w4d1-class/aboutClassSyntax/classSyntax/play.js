"use strict";

// class User {
//     constructor() {}
// }

// console.log(typeof User); // function
// User(); // Error: Class constructor User cannot be invoked without 'new'

class User {
    constructor() {}
}

console.log(User); // [class User]

//TODO - WHAT'S NON-ENUMERABLE / ENUMERABLE?
/*
Objects can have properties that don't show up when iterated through the particular object using Object. 
Those type of properties are called as non-enumerable properties.


Similar to Named Function Expressions, class expressions may have a name.

If a class expression has a name, it’s visible inside the class only:
*/
// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)


// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)