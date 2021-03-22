"use strict";

///////////////////////////////////////////////////Destructuring Assignment.

let user = { name: "John", years: 30 };

let { fName, years: age, isAdmin = false } = user;

console.log(fName); // John
console.log(age); // 30
console.log(isAdmin); // false

//////////////////////////////////////////////////The maximal salary.
/**
 * Returns the name who has maximum salary.
 
 * @param {object} salaries object with salaries.
 * @return {String} the name who has maximum salary.
 */
function topSalary(salaries) {

    let maxSalary = 0;
    let person = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            person = key;
        }
    }
    return person;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(topSalary(salaries));

//////////////////////////////////////////////////////Create a date.
//Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//////////////////////////////////////////////////////////////////////////// Show a weekday
/*
Write a function getWeekDay(date) to show the weekday in short format: 
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
*/

/**
 * Returns the weekday.
 * @param {object} date input date.
 * @return {String} weekday.
 */
function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    return days[date.getDay()];
}

let date1 = new Date(2014, 0, 3); // 3 Jan 2014
console.log(getWeekDay(date1)); // FR

////////////////////////////////////////////////////////////////// Europian weekday.

/**
* Returns the europian weekday.
* @param {object} date get local day.
* @return {Number} the europian weekday.
*/
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}
let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(getLocalDay(date2));       // tuesday, should show 2

///////////////////////////////////////////////////////////////// Which day of month was many days ago?

/**
* Returns the day of month days ago from the date.
* @param {object} date get local day.
* @param {Number} days input day.
* @return {Number} return the day of month days ago from the date.
*/
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date3 = new Date(2015, 0, 2);

console.log(getDateAgo(date3, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date3, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date3, 365)); // 2, (2 Jan 2014)

//////////////////////////////////////////////////////////// How many seconds has passed today?

/**
* returns the number of seconds from the beginning of today..
* @return {Number} returns the number of seconds from the beginning of today.
*/
function getSecondsToday() {
    let date = new Date();
    let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return seconds;
}

console.log(getSecondsToday());

///////////////////////////////////////////////////////////// Turn the object into JSON and back.

let users = {
    name: "John Smith",
    age: 35
};

let users1 = JSON.stringify(users);
let users2 = JSON.parse(users1);
console.log(users2);