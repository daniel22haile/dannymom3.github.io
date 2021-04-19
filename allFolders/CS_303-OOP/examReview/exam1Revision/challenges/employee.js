"use strict";
/*
Suppose that you have an array of employee objects as follows:
*/

let employees = [{
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
/*
The following statement snippet sorts the employees array by ages in ascending order:
*/
employees.sort((a, b) => {
    return a.age - b.age;
});
/*
To display the employees, you use the forEach() method:
*/
employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});
/*
output: 
       Ana Rosy 25
       John Doe 27
       Zion Albert 30


=> To sort the employees by ages in descending order, you just need to reverse
 the order in the comparison function. For example:
       */
employees.sort((a, b) => b.age - a.age);

employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});

/*
output: 
       Zion Albert 30
       John Doe 27
       Ana Rosy 25


=> The following snippet shows how to sort employees by first names in descending
 order case-insensitively:
       */
employees.sort((a, b) => {
    let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
/*
In this example:

    First, convert the names of employees to lowercase.
    Second, compare names and return -1, 1 and 0, depending on the string comparison.

The following code shows the output:
*/
employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName}`);
});
/*

Output:
Ana Rosy
John Doe
Zion Albert  


=> To sort the employees by joined dates, you need to:

    Convert the joined dates from strings to date objects.
    Sort the employees by dates.
*/
employees.sort((a, b) => {
    let da = new Date(a.joinedDate), //comma? -- nothing just for the sharing let purpose
        db = new Date(b.joinedDate);
    return da - db;
});


employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.joinedDate}`);
});
/*
output:
Zion Albert Feb 15, 2011
John Doe December 15, 2017
Ana Rosy January 15, 2019
*/