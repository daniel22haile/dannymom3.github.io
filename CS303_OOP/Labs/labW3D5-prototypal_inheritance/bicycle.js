//https://www.geeksforgeeks.org/inheritance-in-java/  

const Bicycle = {

    speed: 0,

    applyBrake(decrement) {
        return this.speed -= decrement;
    },

    speedUp(increment) {
        return this.speed += increment;
    }
};



let MountainBike = {
    seatHeight: 3,
    gear: 3
        // __proto__:Bicycle
}
MountainBike.__proto__ = Bicycle;
console.log(`speed of bike is ${MountainBike.speedUp(100)}`);
//console.log(MountainBike.speed); //After speed up with 100
console.log(`Speed of bike fter apply break decrease by 9 is ${MountainBike.applyBrake(9)}`); //After apply break and decrease the speed by 9
//console.log(MountainBike.speed);

console.log(`seat height is ${MountainBike.seatHeight}`);
console.log(`Number of gears for mountain bike is ${MountainBike.gear}`)