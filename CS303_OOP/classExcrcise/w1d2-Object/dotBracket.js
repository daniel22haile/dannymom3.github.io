// function getPrice(itemName) {
//     if (itemName === 'burger') {
//         return 10;
//     } else if (itemName === 'fries') {
//         return 3;
//     } else if (itemName === 'coleslaw') {
//         return 4;
//     } else if (itemName === 'coke') {
//         return 2;
//     } else if (itemName === 'beer') {
//         return 5;
//     }
// }
// let newItem = "burger";
// console.log(getPrice(newItem));


const menu = { burger: 10, fries: 3, coleslaw: 4, coke: 2, beer: 5 };

function getPrice(itemName, menu) {
    const itemPrice = menu[itemName];
    return itemPrice;
}

const priceOfBurger = getPrice('burger', menu);
console.log(priceOfBurger); // outputs: 10


function makeUserName(name, age) {
    return {
        name: name,
        age: age,
    };
}
let user = makeUserName("Daniel", 28);
console.log(user.name + " : " + user.age);

let x = 5;
let y = { x };
console.log(y);

let obje = {
    test: undefined,
};
console.log(obje.test); //undefined
console.log("test" in obje); //true


let pt1 = { x: 1, y: 2 };

let pt2 = { x: 1, y: 2 };
console.log(pt1 == pt2);
console.log(pt1 === pt2);