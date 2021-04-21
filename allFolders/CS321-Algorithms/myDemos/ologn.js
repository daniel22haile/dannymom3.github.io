"use strict";

/*
 * This program shows the (NlogN) time algorithm notation - O(n)
 */
function N_logN_TimeAlgorithm(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < n; j = j * 2) {
            if (i == j)
                console.log("Number " + i + " and " + j + " are equal.");
            else
                console.log("Number " + i + " and " + j + " aren't equal.");
        }
    }
}

N_logN_TimeAlgorithm(4);