//!#7.Write a function ucFirst(str) that returns the string str with
//! the uppercased first character, 
//! for instance: ucFirst("john") == "John";
/**
 * function - first letter upper case
 * @param {string} string - make the first letter upper case from the given string
 * @returns {string} string - returns the first upper case letter string
 */
// We can’ t“ replace” the first character, because strings in JavaScript are immutable.
// But we can make a new string based on the existing one, with the uppercased first character:
//  let newStr = str[0].toUpperCase() + str.slice(1);
//  There’ s a small problem though.If is empty, 
//then str[0] is undefined, and as undefined doesn’ t have the method, we’ ll get an error.
// There are two variants here:
//     1. Use str.charAt(0), as it always returns a string(maybe empty).
//2. Add a test for an empty string.
// Here’ s the 2nd variant:
function ucFirst(str) {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("john")); // John

//!#8.Write a function that returns true if str contains
//! ‘viagra’ or ‘XXX’, otherwise .


//!The function must be case-insensitive:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
    /**
     * function - boolean
     * @param {string} string - check the string if the function contains
     * @return {boolean} boolean - returns either true of false if the function contains the string
     */
    //To make the search case-insensitive, let’s bring the string to lower case and then search:
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

//!#9.Create a function truncate(str, maxlength) that checks the length
//! of the str and, if it exceeds maxlength - replaces the end of str  with the 
//! ellipsis character "...", to make its length equal to maxlenggth.

//!The result of the function should be the truncated (if needed) string.
/**
 * function - creating a string  maximum length truncate
 * @param {string} string - the given string to be truncated
 * @param {number} number - the maximu number of string to be truncated
 * @return (string) string - returns the maximum length of string
 */

// The maximal length must be maxlength , so we need to cut it a little
// shorter, to give space for the ellipsis.
// Note that there is actually a single 
//unicode character for an ellipsis. That’s not three dots.

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '...' : str;
}
console.log(truncate("Hi everyone!", 9));

//!#10.We have a cost in the form "$120" . That is: the dollar sign goes 
//!first, and then the number. Create a function extractCurrencyValue(str)
//! that would extract the numeric value from
//!such string and return it.
/**
 * function - to extract numeric value from the given string
 * @param {string} string - the number in the form of string 
 * @return {number} number - returns the given string by extracting the number from the given string
 */

function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120') === 120);

//!#11.The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6] .
//!The task is: find the contiguous subarray of arr with the maximal 
//!sum of items. Write the function getMaxSubSum(arr) that will return that sum.
/**
 * function - get to find the contiguous subarray of arr with the maximal sum of items
 * @param {string} string - to get the contigous subarray with the maximal sum of the item
 * @return {number} number - returns the contigous subarray with the maximal sum of the item
 */

function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}
//?METHOD TWO
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum if (partialSum < 0) partialSum = 0;
        // zero if negative
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5 
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3 
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100

//!#12.Write the function camelize(str) that changes dash-separated 
//!words like “my-short-string” into camel-cased “myShortString”.
//!That is: removes all dashes, each word after dash becomes uppercased.
/**
 * function - camelize (remove the dashes) the strings that are connected with dashes
 * @param {string} string - strings separated with dashes
 * @return {string} string - returns the string by removing the dashes that conected between the strings
 */

function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color") == 'backgroundColo');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');