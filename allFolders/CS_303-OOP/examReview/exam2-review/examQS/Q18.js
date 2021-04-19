"use strict";
/*
Write a function tenClock() that will show the time for 10 seconds. 
We will want this 10 second timer to display on a web page eventually, but 
for now log the current time to the console every second. 
It should show the current time in hh:mm:ss format. 
Recall the Date object and methods getHours, getMinutes, getSeconds.
*/

function tenClock() {
    let tickCount = 10;
    const watchID = setInterval(logTime, 1000);

    function logTime() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        console.log(hours + ":" + minutes + ":" + seconds);
        if (tickCount === 0) {
            clearInterval(watchID);
        } else {
            tickCount = tickCount - 1;
        }
    }
}
tenClock();