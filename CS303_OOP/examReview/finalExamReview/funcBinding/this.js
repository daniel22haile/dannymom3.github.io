"use strict";

/*
Losing “this”

We’ve already seen examples of losing this. Once a method is passed somewhere separately from the object – this is lost.

Here’s how it may happen with setTimeout:

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

As we can see, the output shows not “John” as this.firstName, but undefined!

That’s because setTimeout got the function
 user.sayHi, separately from the object. The last line can be rewritten as:

let f = user.sayHi;
setTimeout(f, 1000); // lost user context

The method setTimeout in-browser is a little special: 
it sets this=window for the function call (for Node.js, this becomes the timer object, but 
doesn’t really matter here). So for this.firstName it tries to get window.firstName, which does not exist. 
In other similar cases, usually this just becomes undefined.

The task is quite typical – we want to pass an object method somewhere else (here – to the scheduler) 
where it will be called. How to make sure that it will be called in the right context?
*/

//TODO - Solution 1: a wrapper

//The simplest solution is to use a wrapping function:

let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);
/*
Now it works, because it receives user from the outer lexical environment, and then calls the method normally.

The same, but shorter:
*/
setTimeout(() => user.sayHi(), 1000); // Hello, John!


//TODO - Solution 2: bind
/*
Functions provide a built-in method bind that allows to fix this.

The basic syntax is:
*/
// more complex syntax will come a little later
//todo - let boundFunc = func.bind(context);
/*
The result of func.bind(context) is a special function-like “exotic object”, that is callable as 
function and transparently passes the call to func setting this=context.

In other words, calling boundFunc is like func with fixed this.

For instance, here funcUser passes a call to func with this=user:
*/

let user = {
    firstName: "John"
};

function func() {
    console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

//TODO - Now let’s try with an object method:

let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
    sayHi() { alert("Another user in setTimeout!"); }
};