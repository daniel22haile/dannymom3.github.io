function isPrime(num) {
    num = Math.abs(num);
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isSumOfPrimesEven(arr) {
    if (arr.length === 0) return false;
    let sumPrime = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sumPrime += arr[i];
        }
    }
    // for (let num of arr) {
    //     if (isPrime(num)) {
    //         sumPrime += num;
    //     }
    // }
    if (sumPrime === 0) {
        return false;
    }
    return sumPrime % 2 === 0;
}

let arr2 = [1, 2, 3, 4, 5, 6];
console.log(isSumOfPrimesEven(arr2));