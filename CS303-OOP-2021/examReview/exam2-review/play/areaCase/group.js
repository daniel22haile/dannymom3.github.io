//"use strict";
//TODO - USING bind
// let group = {
//     title: "our group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(function(student) {
//             console.log(this.title + ": " + student)
//         }.bind(this))
//     }
// }
// group.showList();



//TODO - USING arrow function
// let group = {
//     title: "our group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach((student) => {
//             console.log(this.title + ": " + student)
//         })
//     }
// }
// group.showList();


//TODO - USING self pattern
let group = {
    title: "our group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        let self = this;
        this.students.forEach((student) => {
            console.log(self.title + ": " + student)
        })
    }
}
group.showList();


//TODO - USING call
let group = {
    title: "our group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        let self = this;
        this.students.forEach((student) => {
            console.log(self.title + ": " + student)
        })
    }
}
group.showList();