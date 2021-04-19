"use strict";
/*
Write a JavaScript function "checkExam" that returns the score of an exam.Thefunction takes 
an array as it argument, which contains objects with 2 properties. 
Oneproperty is ‘answer’ holding the student answer and the other is ‘key’ holding thecorrect answer.  
For example

[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "b", key: "b" }];​→​4
[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "",  key: "b" }];​→​-1

*/




let exam1 = [{ answer: "a", key: "a" }, { answer: "c", key: "a" }, { answer: "b", key: "b" }];

let exam2 = [{ answer: "a", key: "a" }, { answer: "c", key: "a" }, { answer: "", key: "b" }];

function checkExam(exam) {
    let score = 0;
    for (let item of exam) {
        if (item.answer === item.key) {
            score = score + 4;
        } else if (item.answer === "") {
            score = score - 1;
        } else {
            score = score - 4;
        }
    }
    return score;
}
console.log("expecting 4: " + checkExam(exam1));
console.log("expecting -1: " + checkExam(exam2));