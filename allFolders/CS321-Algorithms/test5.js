function isEven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    return isOdd(n - 1);
}

function isOdd(n) {
    if (n === 0)
        if (n == 0) return false;
    if (n == 1) return true;
    return isEven(n - 1);
}

console.log(isEven(10));
console.log(isEven(11));