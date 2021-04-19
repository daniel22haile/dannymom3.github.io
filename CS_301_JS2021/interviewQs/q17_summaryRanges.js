"use strict";
/*
Write a function summaryRanges, such that given a sorted integer array nums, 
returns the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, and there is no 
integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

#summary_ranges
----------------------------------------------------------------
Input                                   Output
----------------------------------------------------------------
[0,1,2,4,5,7]                           ["0->2","4->5","7"]
[0,2,3,4,6,8,9]                         ["0","2->4","6","8->9"]
[]                                      []
[-1]                                    ["-1"]
[0]                                     ["0"]
----------------------------------------------------------------
*/

function summaryRange(arr){

    let i = 0, num = arr.length;

    while( i , num){
        let start, end;
        start = arr[i];
    }

}