"use strict";
class Car {
    constructor(brand, year, price, model) {
        this.brand = brand;
        this.year = year;
        this.price = price;
        this.model = model;
    }

    set model(value) {
        this._model = value;
    }

    get model() {
        return this._model;
    }

    computePrice() { //common interface
        return this.price;
    }

}

class HybridCar extends Car {
    constructor(brand, year, price, taxRate) {
        super(brand, year, price);
        this.taxRate = taxRate;
    }

    computePrice() {
        return this.price * (1 + this.taxRate);
    }
}

class ElectricCar extends Car {
    constructor(brand, year, price, electricTaxRate) {
        super(brand, year, price);
        this.electricTaxRate = electricTaxRate;
    }
    computePrice() {
        return this.price * (1 + this.electricTaxRate);
    }
}

class HeroCar extends Car {
    constructor(brand, year, price, heroTaxRate) {
        super(brand, year, price);
        this.heroTaxRate = heroTaxRate;
    }
    computePrice() {
        return this.price * (1 + this.heroTaxRate);
    }
}

//using array
const arrCars = [
    new HybridCar("Honda", 2020, 30000, 0.1),
    new HybridCar("BMW", 202, 60000, 0.15),
    new ElectricCar("Lexus", 2020, 50000, 0.1),
    new ElectricCar("Tesla", 2020, 70000, 0.1),
    new HeroCar("Hero", 2021, 30000, 0.1)
];

function computeTotalPrice(car) {
    let result = car.reduce((sum, carPrice) => sum + carPrice.computePrice(), 0);
    return result;
}

console.log(`The total price of cars is ${computeTotalPrice(arrCars)}`);