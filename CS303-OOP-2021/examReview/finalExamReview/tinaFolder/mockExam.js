"use strict";
/*
Exam 2 - Mock Test
Return to Assessment List

Part 1 of 3 - 0.0 / 5.0 Points

Question 1 of 9
0.0
1.0 Points
*/
let animal = {
    eats: true,
    walk: function() {
        console.log("Animal walk");
    }
};
let rabbit = Object.create(animal);
rabbit.jumps = true;
/*
List all properties with values and methods for rabbit object based on the code above.
NOTE: In the real exam, I may ask you the same question for animal object too.
*/


//Feedback:
{
    jumps: true,
    __proto__: animal
}
//Question 2 of 9

function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;

}
let user1 = new User('John', 'Smith', new Date('2000-10-01'));
User.prototype.getFullName = function() {
        return this.firstname + ' ' + this.lastname;
    }
    /*
    List all the properties and methods belong to user1 object in the code above.

    NOTE: In the real exam, I may ask you the same question for User constructor function too.
    */


//Feedback:
{
    firstname: 'John',
    lastname: 'Smith',
    birthDate: new Date('2000-10-01'),
    __proto__: User.prototype
}

//Question 3 of 9
class User {
    static name = 'Default';
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
        } else {
            this._name = value;
        }

    }

}
/*
let john = new User("John");
1. List all properties with values and methods for class User
2.  List all properties with values and methods for john object
NOTE: In the real exam, I may ask you to List all properties with values 
and methods for class User.prototype. Inheritance, staitc properties, static methods
*/

Feedback:
    //1. List all properties with values and methods for class User

    {
        name: 'Default',
        __proto__: Function.prototype
    }
    //2.  List all properties with values and methods for john object
    {
        _name: "John",
        __proto__: User.prototype
    }

// What are the two ways to create an empty object?
// NOTE: In the real exam, for this type of short answer questions, they are 
//only based on lectures 10 inheritance & 11 classes. I may ask you to read a piece of code, and 
//there are some problems, will ask you to fix it.

Feedback:
    let obj1 = {};
let obj2 = new Object();

//Part 2 of 3 - Multiple Choices or True/False questions 1.0 / 1.0 Points

// Question 5 of 9
// 1.0 Points
// in Prototypal Inheritance, Methods are often shared, but the object state generally is not.
// NOTE: In the real exam, there are more multiple choices questions and true/false questions. This one is just an example.

// True
// False

// Answer Key: True

//Part 3 of 3 - Programming Questions 0.0 / 14.0 Points

// Question 6 of 9

// In the built-in String constructor function, there is no reverse method. 
//The requirement is to add a reverse method which is available for every String Object.

// The reverse method is to reverse each characters in the String object, and return a reversed String.

// Here are examples:

const name = 'John Smith';

console.log(name.reverse()); //Expected Reuslt: htimS nhoj
const number = '123456';
console.log(number.reverse()); //Expected Reuslt: 654321
/*
NOTE: In the exam, I'll ask you similar questions related to native prototypes. 
It's not limited in String, may ask you create a new method in Number, Date, Map, etc. Only 1 method though.
The String after the "Expected Result: " is the value being returned by name.reverse(). 
In the exam, you have to find out if the new method returns a value or not returns a value by reading the code.
Also the question point may be different in the real exam.
*/

Feedback:
    String.prototype.reverse = function() {
        let result = '';
        for (let i = this.length - 1; i >= 0; i--) {
            result += this.charAt(i);
        }
        return result;
    }


/*
TODO - Try this in linkedList
 Question 7 of 9

 Use class syntax to create a new class named Stack. 

It has the following methods:
1. push(value): when call this method, it'll add the value into the Stack.
2. pop(): this method removes the last added in element from the Stack.
3. toString(): return a String which contains all the elements in the Stack in certain format: Stack{ each element separated with comma}
Here is examples of using the Stack class.
const s = new Stack();
s.push(1);  //add 1 in the stack
s.push(2); //add 2 in the stack
s.pop(); // remove 2 from the stack since 2 is the last element being added in the stack
s.push(3); //add 3 in the stac
console.log(s.toString()); //Expected Result: Stack {1,3}

You're allowed to use Array APIs to do this question.
NOTE: In the real exam, I may ask you to use class syntax or constructor function to 
implement data structures we have learnt from this course, it won't be Array, but may 
be Map, Set, LinkedList, Stack and Queue. And you have to read the given code to 
find out constructor, methods, properties, etc by yourself. I'll listed all methods 
needed to be implemented, but constructor and properties, you have to find out by yourself.
*/

Feedback:
    class Stack {
        constructor() {
            this.arr = [];
        }
        push(value) {
            this.arr.push(value);
        }
        pop() {
            this.arr.pop();
        }
        toString() {
            let output = 'Stack {'
            output += this.arr.join(',')
            output += '}';
            return output;
        }

    }
let s = new Stack();
s.push(1);
s.push(2);
s.pop();
s.push(3);
console.log(s.toString());

/*
Question 8 of 9

This is a quiz system which allows students to take quiz,  get each student's quiz score and compute average score of students.

You need to use constructor functions to implement Student, Question and Quiz
constructor function Student:
properties: 
studentId: a unique student id
answers: holds an array that records the student's answers for the questions.
method: addAnswer(question) - add student's question(id, answer) to answers array.
constructor function Question:
properties: 
qid: unique quesiton id
answer: hold quiz correct answer or student's answer
method: checkAnswer(answer) - used to check if student's answer is correct
constructor function Quiz:
properties:
questions: It's a Map which holds question id and correct answers. The key is question id, the value is the correct answer for this question
students: an array holds all students
methods:
scoreStudent(sid), computes the quiz score for this student
getAverageScore(), computes the average score over all students
After you complete the Question, Student and Quiz constructor functions, we may use the system as below:
Your system should return the correct result for getAverageScore() and scoreStudent(sid) as the expected result.
*/

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5

//NOTE: In the real exam, I may ask you to use 
//class syntax or constructor functions to do another problems.


Feedback:
    function Question(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];
}

Student.prototype.addAnswer = function(question) {
    this.answers.push(question);
}

function Quiz(questions, students) {
    this.questions = new Map();
    questions.forEach(q => this.questions.set(q.qid, q.answer));
    this.students = students;
}

Quiz.prototype.scoreStudentBySid = function(studentId) {
    const student = this.students.filter(s => s.studentId === studentId)[0];
    return student.answers.reduce((sum, currentQuestion) => {
        if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
            sum = sum + 1;
        }
        return sum;
    }, 0);
}
Quiz.prototype.getAverageScore = function() {
    return this.students.reduce((accmulator, student, index, array) => {
        return accmulator + this.scoreStudentBySid(student.studentId) / array.length;
    }, 0);
}

const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);
let average = quiz.getAverageScore();
console.log(average);

/*
Question 9 of 9
In a company, employees may have multiple bank accounts: zero or more savings accounts and zero or 
more checking accounts. Each checking account has an account id, a balance, and a monthly fee. 
Each savings account has an account id, a balance, and an interest rate associated with the 
particular type of savings account. It is possible to read the current balance in any of these 
accounts, but it is also possible to determine the balance after interest or monthly fee is 
applied by calling the computeUpdatedBalance method on the account.

The method computeUpdatedBalance in CheckingAccount does the following computation to obtain the return value:
balance – monthlyFee
The method computeUpdatedBalance in SavingsAccount performs the following computation to obtain the return value:
balance + (interestRate * balance)

CheckingAccount and SavingsAccount are subclasses of Account.

class Account:
properties: accountId. balance
method: computeUpdatedBalance: returns balance

Class CheckingAccount:
properties: accountId. balance, monthlyFee
method:  computeUpdatedBalance returns  balance-monthlyFee

 

class SavingsAccount:
properties: accountId. balance, interestRate
method: computeUpdatedBalance returns  balance + (interestRate * balance)

class Employee:
properties:
name: employee name

accounts: an array holds employee's checking account and savings account
methods:
addAccount(account): add account to accounts array
computeUpdatedBalanceSum(): return the total balance of employee's accounts with 
updated balance. The updated balance is computed in each account's computeUpdatedBalance().

After you implement the class above, we can use it as below:
const emp = new Employee('Tina');
emp.addAccount(new CheckingAccount(1001, 5000.00, 25));
emp.addAccount(new CheckingAccount(1002, 2000.00, 25));
emp.addAccount(new SavingsAccount(8001, 30000.00, 0.02));
emp.addAccount(new SavingsAccount(8002, 50000.00, 0.04));
console.log(emp.computeUpdatedBalanceSum()); //Expected Result: 89550

 
NOTE:  This is Polymorphism question, in the real exam, you'll see similar questions. Only test using Class Syntax.
Feedback:
*/
class Account {
    constructor(accountId, balance) {
        this.accountId = accountId;
        this.balance = balance;
    }

    computeUpdatedBalance() {
        return this.balance;
    }
}


class CheckingAccount extends Account {
    constructor(accountId, balance, monthlyFee) {
        super(accountId, balance);
        this.monthlyFee = monthlyFee
    }

    computeUpdatedBalance() {
        return this.balance - this.monthlyFee;
    }
}


class SavingsAccount extends Account {
    constructor(accountId, balance, interestRate) {
        super(accountId, balance);
        this.interestRate = interestRate;
    }



    computeUpdatedBalance() {
        return this.balance * (1 + this.interestRate);
    }
}

class Employee {
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }



    addAccount(account) {
        this.accounts.push(account);
    }

    computeUpdatedBalanceSum() {
        return this.accounts.reduce((sum, account) => sum += account.computeUpdatedBalance(), 0);
    }
}


const emp = new Employee('Tina');
emp.addAccount(new CheckingAccount(1001, 5000.00, 25));
emp.addAccount(new CheckingAccount(1002, 2000.00, 25));
emp.addAccount(new SavingsAccount(8001, 30000.00, 0.02));
emp.addAccount(new SavingsAccount(8002, 50000.00, 0.04));
console.log(emp.computeUpdatedBalanceSum()); //Expected Result: 89550