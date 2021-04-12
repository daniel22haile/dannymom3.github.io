"use strict";

function Flight(airlines, flightNumber) {
    this.flightName = airlines,
        this.flightNumber = flightNumber
    this.display = function() {
        console.log(this.flightName)
        console.log(this.flightNumber)
    }
}
let flight1 = new Flight("American Airlines", "A123")
let flight2 = new Flight("Cargo Airlines", "C653")

flight1.display()
flight2.display()

console.log(flight1 instanceof Flight)
console.log(flight2 instanceof Flight)

console.log(flight1.constructor === Flight)
console.log(flight2.constructor === Flight)