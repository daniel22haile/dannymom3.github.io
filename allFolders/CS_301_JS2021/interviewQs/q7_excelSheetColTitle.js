"use strict";

/*
Given a positive integer, return its corresponding column title as appear in anExcel Sheet.
For example:
1 →A, 2→B, 3→C,...,26→z,27→AB, →28->AB, ...
-----------------------------------------
        Input                  Output
-----------------------------------------
        1                       A
        28                      AB
        701                     ZY
-----------------------------------------
*/

function convertToTitle(num) {

    let letters = /^[A-Za-z]+$/;
    if (num <= 0) return "invalid";

    while (num > 0) {
        num--;

    }
}