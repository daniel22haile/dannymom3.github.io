"use strict";
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