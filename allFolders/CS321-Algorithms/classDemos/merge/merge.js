"use strict";


let arr4 = merge([7], [2]);
console.log(arr4);

//running time: O(n) (n=n1+n2)
function merge(arr1, arr2) {
    let arr = []; //length of arr: n1+n2
    let n1 = arr1.length;
    let n2 = arr2.length;
    let i = 0;
    let j = 0;
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i < n1) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < n2) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}



const num = 45654356;
const greatestDigit = (num = 0, greatest = 0) => {
    if (num) {
        const max = Math.max(num % 10, greatest);
        return greatestDigit(Math.floor(num / 10), max);
    };
    return greatest;
};
console.log(greatestDigit(num));