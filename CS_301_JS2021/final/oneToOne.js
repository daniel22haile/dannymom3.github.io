//one to one array -- first and last 1, and the rest 2
//[1, 2, 2, 1] -- true
//[1, 2, 2, 2]-- false
//[1, 2, 2, 3, 1] -- false, because of 3

function oneToOne(arr) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] !== 1 && arr[arr.length - 1] !== 1) {
        return false;
    }
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] !== 2) {
            return false;
        }
    }
    return true;
}


let givenArr = [1, 2, 2, 2, 1];
console.log(oneToOne(givenArr));