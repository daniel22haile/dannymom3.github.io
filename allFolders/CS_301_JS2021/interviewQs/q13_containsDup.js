"use strict";
/*
Given an array of integers and an integer k, find out whether there 
are two distinct indices i and j in the array such that nums[i] = nums[j] 
and the absolute difference between i and j is at most k.

#contains_duplicate_ii
absolute difference
#let difference = function (a, b) { return Math.abs(a - b); }
-------------------------------------------------------
      Input                              Output
-------------------------------------------------------
      nums=[1,2,3,1], k=3                true
      nums=[1,0,1,1], k=1                true
      nums= [1,2,3,1,2,3], k=2           false
-------------------------------------------------------
*/

function