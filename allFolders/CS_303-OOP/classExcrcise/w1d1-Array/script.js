"use strict"
const assert = require("assert");
describe("executor", function() {
    it("tests add", function() {
        assert.strictEqual(executor(add, 5, 10), 15);
    });
    it("tests mult", function() {
        assert.strictEqual(executor(mult, 5, 10), 50);
    });
});

function executor(callBack, num1, num2) {
    return callBack(num1, num2); //callBack act as a function whatever the function
    //is outside this function does like add() and mult()
}

console.log(executor(add, 5, 10));
console.log(executor(mult, 5, 10));

function add(num1, num2) {
    return num1 + num2;
}

function mult(num1, num2) {
    return num1 * num2;
}




function scoreExams(studentAnswer, correctAnswers) {
    let score = []
    for (let eachAnswer of studentAnswer) {
        let answer = 0
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === correctAnswers[i])
                answer++;
        }
        score.push(answer)
    }
    return score;
}

const studentAnswers = [
    [1, 1, 2],
    [2, 1, 2],
    [3, 1, 3]
];
const correctAnswers = [3, 1, 2];
console.log(scoreExams(studentAnswers, correctAnswers)); //--> [2, 2, 2]


//sum of the values of a given multi-dimensional array

function summatrixVal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("The sum of matrix value using for loop iteration is ", summatrixVal(matrix));


function sumOfMatrVal(arr) {
    let total = 0;

    for (let outer of arr) {
        for (let inner of outer) {
            total += inner;

        }
    }
    return total;
}
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("The total using for of loop is ", sumOfMatrVal(matrix2));