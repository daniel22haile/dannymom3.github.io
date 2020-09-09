function findLongestWord(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
}

console.log(findLongestWord(["This", "is", "Daniel"]));