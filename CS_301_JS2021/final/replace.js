function replace(arr, n, rep) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n)
            arr[i] = rep
    }
    return arr
}
console.log(replace([1, 2, 3, 3, 4], 3, 9)) //[1,2,9,9,4]