"use strict";
/*Write a function ‘thisProgramIsTheBest’ which takes 3 parameters.
 First two parameters are objects that have property ‘color’ and the last one is a function, 
 “cbFun”. If the color properties are equal, then return “Same color!”, 
 otherwise call the cbFun function with the input parameters as arguments, 
 and then return “Different colors”.*/

function thisProgramIsTheBest(obj1, obj2, cbFun) {
    if (obj1.color === obj2.color) {
        return "same colr";
    } else {
        cbFun(obj1, obj2);
        return "differnet color";

    }
}

const obj1 = {
    color: "red",
    name: "Danny",
};

const obj2 = {
    color: "blue",
    name: "Daniel",
};

function cbFun(obj1, obj2) {
    return "different color";
}

console.log(thisProgramIsTheBest(obj1, obj2, cbFun));