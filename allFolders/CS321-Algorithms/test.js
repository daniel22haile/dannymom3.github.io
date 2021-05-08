function mergeArr(arr1, arr2) {

    let mergeLen = arr1.length + arr2.length;
    let newArr = [];
    let i = 0;
    let j = 0;
    for (let i = 0; i < mergeLen; i++) {
        if (arr1[i] < arr2[j]) {
            newArr[i] = arr1[i];
            i++;
        } else if (arr2[j] < arr1[i]) {
            newArr[j] = arr2[j];
            j++;
        } else if (i < arr1.length) {
            newArr[i] = arr1[i];
            i++;
        }


    }
    return newArr;
}

let n = 5;
for (let i = 1; i * i <= n; i++) {
    console.log("sevenUPs");
}

let n2 = 3;
for (let i = 1; i <= n2; i++) {
    for (let j = 1; j <= n2; j++) {
        console.log("*");
        break;
    }
    console.log("*");
}


function secondSmallest(arr) {
    let smallest = 0;
    let secondSmallest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];

        } else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

let newArr1 = [1, 2, 3, -5, -100, -12222];
let answer3 = secondSmallest(newArr1);
console.log(answer3);

//TODO - refer in shell sort
function largestH(n) {
    let h = 1;
    for (h = 1; h <= n; h = h * 3 + 1) {

    }
    let result = (h - 1) / 3;
    return result;
}
console.log(`largest h is ${largestH(100)}`); //largest h is 40


//TODO - find min from array
function findMin(arr) {
    return findMinHelper(arr, 0);
}

function findMinHelper(arr, i) {
    if (i === arr.length) {
        return; //arr[i];
    } else {
        let result = findMinHelper(arr, i + 1);
        return result < arr[i] ? result : arr[i];
    }
}
console.log(`find min ${findMin([2, -100, 4, 6, 55])}`);