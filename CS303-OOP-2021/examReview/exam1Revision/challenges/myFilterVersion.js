"use stric";

/*
Write code for your own version of filter. 
a.Your function must be a pure function. 
b.You cannot use JavaScript’s filter method. 
c.The name will be myFilter. 
d.It will have two parameters.  The first will be the array to filter.  The second will be the filter function. 
e.Write a JS Doc comment that will pass our esLint rules.
f.Test your function on this array [1, 2, 3, 4, 5]. 

Write a function that will allow you to use myFilter to filter the array for even numbers
*/

function myFilter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let callbackResult = fn(arr[i], i); //i is index, and it's optional in here
        if (callbackResult) {
            result.push(arr[i]);
        }
    }
    return result;
}
let arrrr = [1, 2, 3, 4, 5];
let result = myFilter(arrrr, function(value, index) { //index is optional in here also
    return value % 2 === 0;
});


console.log(result); // [ 2, 4 ]