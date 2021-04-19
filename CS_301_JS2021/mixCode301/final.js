//1. 
// for (let i = 5; i <= 5; i--) {
//     console.log("hello");    //infinity
// }

//2

for (let i = 0; i <= 5; i++) {
    let count = 0;
    count++;
    console.log(count); //same shitttt --- 0 + 1 -- 6tms
}
console.log("hello");
//console.log(count); -- gets error unless count declared outside
console.log("----------------------")

for (let i = 4; i > 0; i = i - 2) {
    //let j = 0;
    for (let j = 1; j <= 5; j += 3) {
        console.log(i + j)
    }


}
console.log("----------------------")
for (let i = 4; i > 0; i = i - 2) {

    for (let j = 1; j <= 5; j += 3) {
        console.log(i + j)
    }

}
console.log("----------------------")

let b = 0;

function bar(n) {
    let a = 5;
    if (n >= 0) {
        n = Math.sqrt(n);
    }
    let b = a + n;
    console.log(a, b, n);
}
console.log(b);
bar(4);
console.log(b);
//console.log(n);  -- error -- n is not defined

console.log("----------------------")


function findLargest(num1, num2, num3) {
    let largest = 0;
    if (num1 > num2) {
        largest = num1;
    } else {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}

console.log(findLargest(3, 4, -2)); //4

console.log("----------------------")

function evenIndicesSum(arr) {
    let SumevenIndicesValue = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            SumevenIndicesValue += arr[i];
        }
    }
    return SumevenIndicesValue;
}

let newArr = [1, 2, 3, 4, 5, 6]; //expected 1 + 3 + 5 = 9
console.log(evenIndicesSum(newArr));
console.log("----------------------")


function averageLengthOfStr(strArr) {
    if (strArr.length === 0) {
        return false;
    }
    let sumOfStrLength = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i]) {
            sumOfStrLength += strArr[i].length;
        }
    }
    let average = Math.round(sumOfStrLength / strArr.length);
    return average;
}
let strings = ["dan", "hai", "me"];
console.log(averageLengthOfStr(strings));


console.log("----------------------")

function fillArr(emptyArr, num) {
    let fillMe = [];

    for (let i = 0; i < num; i++) {

        fillMe.push(Math.floor(Math.random() * 100));
    }
    return fillMe;
}
let empty = [];
console.log(fillArr(empty, 5));


console.log("----------------------")

function compareValues(arr, idx1, idx2) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[idx1] === arr[idx2]) {
            return 0;
        } else if (arr[idx1] > arr[idx2]) {
            return 1;
        } else {
            return -1;
        }

    }
}
console.log(compareValues([1, 3, 2, 4, 5, 0, 2], 2, 6));
console.log(compareValues([1, 3, 2, 4, 5, 0, 2], 1, 5));
console.log(compareValues([1, 3, 2, 4, 5, 0, 2], 3, 4));

console.log("----------------------")

function secondSmallest(arr) {
    let smallest = arr[0];
    let secSmallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secSmallest) {
            secSmallest = arr[i];
        }
    }
    return secSmallest;
}

let newArr2 = [11, 2, 33, -4, 100]; //expected 2
console.log(secondSmallest(newArr2));

console.log("--------isComposite?--------------")


function isOddComposite(num) {

    num = Math.abs(num);

    if (num < 3 || num % 2 === 0) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;

}



console.log(isOddComposite(1)); //false
console.log(isOddComposite(49)); //true
console.log(isOddComposite(63)); //true
console.log(isOddComposite(9)); //true
console.log(isOddComposite(12)); //false
console.log(isOddComposite(13)); //false
console.log(isOddComposite(21)); //true
console.log(isOddComposite(27)); //true
console.log(isOddComposite(81)); //true
console.log(isOddComposite(0)); //false
console.log(isOddComposite(-15)); //true



let result = [1, 2, 3].map(n => Math.pow(n, 3)); //[1, 8, 27]
console.log(result);

let result1 = ["what", "how", "where"].filter(s => s.startsWith("wh")); // [ 'what', 'where' ]
console.log(result1);