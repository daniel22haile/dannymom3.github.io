let arr = [53, 11, 34, 12, 18];

function bubbleDecending(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) { //TODO - NB
            if (a[i] < a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}

console.log(bubbleDecending(arr));