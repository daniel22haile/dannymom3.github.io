//https://www.geeksforgeeks.org/inheritance-in-java/  
// Java program to illustrate the
// concept of inheritance

// base class
const Bicycle = {

    // gear: gear,
    // speed: speed,

    applyBrake(decrement) {
        return this.speed -= this.decrement;
    },

    speedUp(increment) {
        return this.speed += this.increment;
    }
};


Bicycle.prototype.MountainBike = function(seatHeight, gear, speed) {
    this.seatHeight = seatHeight;
    this.gear = gear;
    this.speed = speed;

}


const mBike = new MountainBike(4, 3, 100);
console.log(mBike.applyBrake());

MountainBike.applyBrake();
// overriding toString() method
// of Bicycle to print more info
// let mountainBike = function() {
//     return ("No of gears are " + gear + "\n" +
//         "speed of bicycle is " + speed + "\nseat height is " + seatHeight);

// }