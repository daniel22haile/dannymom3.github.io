//"use strict";

function perimeter() {
    console.log(this);
    return 4 * this.side;
}

const shape = { side: 5, perimeter: perimeter };
shape.perimeter();
//TODO -- output -- { side: 5, perimeter: [Function: perimeter] }

//NB:if we console.log(shape.perimeter()); --> we'll get 20