"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.  */

// const assert = require("assert"); //always need this with node
// const myExports = require("./bicycle.js"); //with node need the name of your file with your functions here
// const mountainBike = myExports.mountainBike; //do this for all of the functions used in the Mocha tests


/*
Write a constructor function Accumulator(initialValue, increment).  The object it creates should:
•	Store the current accumulated value in a property currentValue.  The constructor should set this to be initialValue.
•	The accumulate method should increase the currentValue by the increment.
•	The report method should return the currentValue.
*/


describe("MountainBike", function() {


    it("checks mountainBike proto inheritance", function() {
        MountainBike.speedUp(100);
        MountainBike.applyBrake(9);
        assert.strictEqual(MountainBike.speed, 91);
        assert.strictEqual(MountainBike.gear, 3);
    });

});