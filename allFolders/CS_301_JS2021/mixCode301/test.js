"ust strict";

function maxMinPair(arr) {

    arr.sort((a, b) => a - b);
    let newArr = [];
    newArr.push(arr[arr.length - 1], arr[0]);
    return newArr;
}
let givenArr = [12, 3, 1, 22, 100]; //expected [100, 1]
console.log(maxMinPair(givenArr));



let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reducer = (a, b) => a + b;
let sum = numberArr.reduce(reducer);
console.log(sum);

function sumUp(input) {
    //let myArr = numDigits.split("");
    let sum = 0;
    while (input > 0) {
        let last = input % 10;
        sum += last;
        input = Math.floor(input / 10);
    }
    return sum;
}
let numberArr2 = 123456789;
console.log(sumUp(numberArr2));