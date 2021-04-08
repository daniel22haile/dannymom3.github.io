// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     };
// }

// let user = makeUser();

// console.log(user.ref().name);

let student = {
    fName: "Elias",
    lName: "Zerai",
    fullName: function() {
        console.log(`${this.fName} ${this.lName}`);

    }
}
student.fullName();