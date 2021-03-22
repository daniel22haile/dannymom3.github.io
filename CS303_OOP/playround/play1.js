// function executor(callBack, num1, num2) {
//     return callBack(num1, num2); //callBack act as a function whatever the function
//     //is outside this function does like add() and mult()
// }

// console.log(executor(add, 5, 10));
// console.log(executor(mult, 5, 10));

// function add(num1, num2) {
//     return num1 + num2;
// }

// function mult(num1, num2) {
//     return num1 * num2;
// }

// describe("executor", function() {
//     it("tests add", function() {
//         assert.strictEqual(executor(add, 5, 10), 15);
//     });
//     it("tests mult", function() {
//         assert.strictEqual(executor(mult, 5, 10), 50);
//     });
// });


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