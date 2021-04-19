"use strict";


//TODO -- ??
// function area() {
//     console.log(this);
//     console.log(Math.PI * this.radius * this.radius);

//     const circle = {
//         radius: 1,
//         area: area
//     };
//     setTimeout(circle.area, 1000);

// };
function area() {
    console.log(this); //-----------window obj--------------
    console.log(3.14 * this.radius * this.radius); //------------NaN-------------
}
const circle = {
    radius: 1,
    area: area
};
setTimeout(circle.area, 1000);