"use strict";

/**
 * @since April - 2021
 * @author Daniel Haile
 * @param {number} first user input number
 * @param {number} last user input last number
 * @returns {Object} returns an array in range of first and last user input numbers
 */
function range(first, last) {
    if (last - first === 0) {
        return [];

    } else {
        let numbers = range(first, last - 1);
        numbers.push(last - 1);
        return numbers;
    }
};

console.log(range(3, 6));