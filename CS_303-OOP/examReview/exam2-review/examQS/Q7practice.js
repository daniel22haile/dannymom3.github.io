function perimeter() {
    console.log(this); //-----------------------------------------
    //return 4 * this.side;
}

// const shape = { side: 5, perimeter: perimeter };
// console.log(shape.perimeter()); //-------------------------------------
// //TODO -- output -- 20

//NB:if we console.log(shape.perimeter()); --> we'll get 20
perimeter();