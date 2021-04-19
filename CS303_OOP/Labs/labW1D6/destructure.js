"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo, getWeekDay, getLocalDay, formatDate, getLastDayOfMonth, getSecondsToday }; //add all of your function names here that you need for the node mocha tests


let user = { name: "John", years: 30 };

let { fName, years: age, isAdmin = false } = user;

console.log(fName); // John
console.log(age); // 30
console.log(isAdmin); // false

//TODO - The maximal salary.
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

//TODO - Create a date.
//Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//TODO - Show a weekday
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

//TODO - Europian weekday.

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
let date2 = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getLocalDay(date2)); // tuesday, should show 2

//TODO - Which day of month was many days ago?

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

//TODO - How many seconds has passed today?

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

//TODO - Turn the object into JSON and back.

let users = {
    name: "John Smith",
    age: 35
};

let users1 = JSON.stringify(users);
let users2 = JSON.parse(users1);
console.log(users2);

//TODO -- last day of the month
/**
 * 
 * @param {number} year input year
 * @param {number} month user input month
 * @returns {number} returns last day of month
 */
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28

//TODO -- Format the relative date
/**
 * 
 * @param {number} date 
 * @returns {number} returns the format of year, month and date
 */
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
        return `${diffMin} min. ago`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}