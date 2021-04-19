let ob1 = { id: 123 };
let ob2 = { id: 123 }
let ob3 = ob2;
let x = 300; //---------------- this 
if (ob1 === ob2) {
    x = 5;
} else if (ob1 === ob3) {
    x = 7;
} else {
    x = 10;
}
x = 100; //------------------------ OR this?
console.log(x); // Output? ___100___


let y = 5;

function double(x) {
    y = y * 2;
}

double(y); // call the function

console.log(y) //Output?_10____



let z = 5;

function double(z) {
    z = z * 2;
    console.log(z);
}
console.log(z) //Output?_____ 1st 5, second 10
double(z);

let a = 5;

function double(a) {
    a = a * 2;
    console.log(a);
}
double(a);
console.log(a) //Output?_____ 1st 10, second 5