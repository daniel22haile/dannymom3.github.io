"use strict";

/*
a)Create a student object with the properties first name and last name. 
b)Create an array and add 2 student objects. 
c)Use the forEach method to print out all the values and indices.  

Use function declarations to declare any functions in the code
*/


let student1 = {
    firstName: "Daniel",
    lastName: "Haile",
};

let student2 = {
    firstName: "Mike",
    lastName: "Desta",
};

let arr = [student1, student2];

arr.forEach(function(value, index) {
    console.log(value.firstName + " " + value.lastName + " " + index);
});