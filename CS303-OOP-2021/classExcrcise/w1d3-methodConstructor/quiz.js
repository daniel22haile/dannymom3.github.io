"use strict";
// const a = 5;
// const b = 5;
// console.log(a === b);


// const a = { name: "John", age: 10 };
// const b = { name: "John", age: 10 };
// console.log(a === b);

// const a = { name: "John", age: 10 };
// const b = a;
// console.log(a === b);

// const a = { name: "John", age: 10 };
// const b = a;
// b.name = "alex";
// b.age = 65;
// console.log(a === b);

// let baz = "" + 33 + 10;
// console.log(baz === 43);

// const a = 5;
// a = 6;
// console.log(a); //Error!

// const a = { x: 5 };
// a.x = 6;
// console.log(a); //{x : 6}

// const a = { x: 5 };
// a = { x: 6 };
// console.log(a); //Error
//----------------------------------------------------------------------------------

//Write a function, averageScore, that takes the grade report object and returns 
//the average score of all the students. Your function should work for any 
//number of students, but if you are not sure how to do that at least 
//make it work for the given 3 students.
// Hint: to handle any number remember the for .. in slide.

/**
 * @param {Object} grades on quiz
 * @returns {number} returns average grade
 */

const gradeReport = { s101: 3, s102: 2, s103: 3 };

function averageScore(grades) {
    let total = 0;
    let count = 0;
    for (const stuId in grades) {
        total += grades[stuId]; //square bracket is --> to get the value
        count++;
    }
    const average = total / count;
    return average;
}
const totalScore = gradeReport.s101 + gradeReport.s102 + gradeReport.s103;
console.log("Average is 3: ", averageScore(gradeReport));