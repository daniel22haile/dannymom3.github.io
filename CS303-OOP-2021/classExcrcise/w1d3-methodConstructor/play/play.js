"use strict";
// let user = {
//     name: "Daniel",
//     age: 28,
//     sayHi: function() {
//         console.log(this.name);
//     }
// };
// user.sayHi();

const user = {
    name: "John"
}; // Error (can't reassign user)
//-------------------------------------------------
// user = {
//     name: "Pete"
// }; //TODO -- RE-ASSIGN OBJECTS WILL BE AN ERROR!

console.log(user.name);