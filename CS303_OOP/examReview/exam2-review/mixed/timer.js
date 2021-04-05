"use strict";


//TODO -- ??
function area() {
    console.log(this);
    console.log(Math.PI * this.radius * this.radius);

    const circle = {
        radius: 1,
        area: area
    };
    setTimeout(circle.area, 1000);

};