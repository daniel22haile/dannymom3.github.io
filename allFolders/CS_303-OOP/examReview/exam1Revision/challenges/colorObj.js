"use strict";

let color = "Red";

let obj = {
    color: "blue",

    printColor: function() {
        console.log(color);
    }
}
obj.printColor(); //Red

let color1 = "Red";

let obj1 = {
    color1: "blue",

    printColor1: function() {
        console.log(this.color1); //TODO - the difference is due to this keyword
    }
}
obj1.printColor1(); //blue