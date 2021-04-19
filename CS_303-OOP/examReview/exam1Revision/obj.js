"use strict";

let rectangle = {
    heigth: 2,
    width: 5,

    area: function() {
        return this.heigth * this.width;
    },
};

rectangle.color = "Red";

for (let key in rectangle) {
    console.log(key + " : " + rectangle[key]);
}

console.log(`The area of rectangle is ${rectangle.area()}`);