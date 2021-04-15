/*
The big difference between call and apply is that 
-> call takes a variadic argument and 
-> apply takes an Array.
*/
function say() {
    console.log(arguments);
}
say.call(this, "a", "b");
say.apply(this, ["a", "b"]);


//TODO - Bind
/*
Using Function.bind() is actually a different thing though. 
Bind lets you create a context binding where you can 
call a function from a specific context when you want.
*/
function honk() {
    console.log(this.sound);
}

function Car() {
    this.sound = "honk";
}

function Van() {
    this.sound = "beep";
}
let c = new Car();
let v = new Van();

let ftorCar = honk.bind(c);
let ftorVan = honk.bind(v);

ftorCar(); // prints honk
ftorVan(); // prints beep

//TODO - apply
/*
The apply() method is an important method of the function prototype and is used to call
 other functions with a provided this keyword value and arguments provided in the form of array or an array like object.
Array-like objects may refer to NodeList or the arguments object inside a function.

This means that we can call any function and explicitly specify what this should reference in the calling function.

Syntax

todo --> function.apply(this, [arguments]);
Example:

*/
let array = [1, 2, 3, 4];
let elements = ["a", "b", "c"];
array.push.apply(array, elements);
console.log(array); // [ 1,   2,   3,   4, 'a', 'b', 'c']


//TODO - find the max
let numbers = [12, 33, 54, 65, 75];
console.log(Math.max.apply(null, numbers));

//TODO - Call
/*
The call() method is used to call a function with
 a given this and arguments provided to it individually.

 This is very similar to apply, the only difference being that 
 apply takes arguments in the form of an array or array-like 
 objects, and here the arguments are provided individually.

 TODO - Syntax -->function.call(thisArg, arg1, arg2, arg3,...)

 Example:
*/

function Food(name, price) {
    this.name = name;
    this.price = price;
}

function Enjera(name, price) {
    Food.call(this, name, price);
    this.category = "enjuye";
}

function Shiro(name, price) {
    Food.call(this, name, price);
    this.category = "yummy";
}

let teff = new Enjera("tefEnjera", 50);
let myShiro = new Shiro("tegabino", 60);

console.log(teff);
console.log(myShiro);


//TODO - Example2
function Restaurant() {
    let reply = [this.kitfo, "available between", this.weekDays].join("  ");
    console.log(reply);
}

let open = {
    kitfo: "Kitfo is",
    weekDays: "Monday to Saturday!"
};
Restaurant.call(open);