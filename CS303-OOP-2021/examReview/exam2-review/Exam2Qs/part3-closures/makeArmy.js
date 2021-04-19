"use strict";

function makeArmy() {
    let shooters = [];
    let i = 0
    while (i < 10) {
        //TODO - changes here
        let j = i;
        let shooter = function() {
            console.log(j);
        };
        shooters.push(shooter);
        i++
    }
    return shooters
}
let army = makeArmy()
army.forEach(f => f()); //this will print from 0 to 9, and the following also prints, 3 1 4
army[3]();
army[1]();
army[4]();