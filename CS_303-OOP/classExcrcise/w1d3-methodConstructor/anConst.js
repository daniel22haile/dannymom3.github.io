"use strict";
class Car {
    constructor() {
        this.wheels = 4
        this.doors = 4
        this.topSpeed = 100
        this.feulCapacity = "400 Litres"
    }
    setWheels(w) {
        this.wheels = w
    }
    setDoors(d) {
        this.doors = d
    }
    setTopSpeed(t) {
        this.topSpeed = t
    }
    setFeulCapacity(fc) {
        this.feulCapacity = fc
    }
    displayCarProps() {
        console.log(`Your car has ${this.wheels} wheels,\
       ${this.doors} doors with a top speed of ${this.topSpeed}\
       and feul capacity of ${this.feulCapacity}`)
    }
}
let sportsCar = new Car();
sportsCar.setDoors(2)
sportsCar.setTopSpeed(250)
sportsCar.setFeulCapacity("600 Litres")
sportsCar.displayCarProps()