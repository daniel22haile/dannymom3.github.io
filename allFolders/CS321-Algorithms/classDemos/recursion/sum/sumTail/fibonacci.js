"use strict";

/*
The Fibonacci sequence up to the N’th digit
Let’s think about how we could calculate the numbers above 
programatically. We know that a Fibonacci number is the sum of 
the previous two numbers, each of which are the sum of the two 
numbers that precede them, respectively. That being said, if we 
want to calculate the N’th Fibonacci number, 
we begin with the first number, 1, and an initial sum 
of 0 (which we leverage default parameters to set) and then iterate 
through that summing process N number of times.

TODO - NO MORE --> ERROR: maximum call stack size exceeded
TODO - problem solved!
*/
(function() {
    function fib(n, sum = 0, prev = 1) {
        if (n <= 1) return sum;
        return fib(n - 1, prev + sum, sum);
    }
    console.log(fib(20000));
})();
/*
The above is a tail recursive function. 
It does not need to hold onto its stack frame
This might seem a little hard to follow, but it is really 
quite simple. fib is nothing more than a function that adds two 
numbers and then passes through that sum (to be used as 
the next N-1) to the next iteration, along with the number 
it just added (the next N-2) and the number of iterations left to run.
It is tail recursive because the return statement consists 
solely of a call to itself, passing along all information that it 
needs with it. Therefore, the javascript engine optimized for tail 
recursion can dump that frame before pushing on the new one.
*/