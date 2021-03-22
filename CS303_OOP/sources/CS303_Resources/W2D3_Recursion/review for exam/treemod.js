// 1 QUESTION 
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { 
  let total = 0;// case (1)
   for(let e of department){
   total += e.salary// sum the array
   }
   return total
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700



// QUESTION 2

function findMax() {
  var max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
const max1 = findMax(1, 123, 500, 115, 66, 88);
const max2 = findMax(3, 6, 8);
console.log("max1: " + max1);
console.log("max2: " + max2);
///////////////////////////////////////////////////////////////////

function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya")



/////////////////////////////////////////////////////QUETION 3

"use strict";
function sayHi1() {
  console.log('Hello');
}
setTimeout(sayHi1(), 2000);// Hello...stil work with parenthesis.


function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
}
setTimeout(sayHi(), 2000, "Hello", "John"); // undefined, undefined....becausewe we pass the arguments





"use strict";

/*
Write a recursive function, treeModifier, that will take a tree and a modifier 
function as parameters. Walk through the tree and apply the function to each node. 
The function should apply some operation to a node. Write a function that will change 
the value of a node to be all caps. Write another that will change the value to have *** in 
front and behind the node value. Write another that will reverse the string of the node value. 
Call your recursive function with each of these modifier functions. treeModifier(tree, modiferFunc)
*/

/**
 * 
 * @param {*} treeNode is some node in a tree
 * @param {*} modFunc functino to apply to each node
 * @returns {null}
 * This function modifes the value of each node in the tree using the modFunc
 */
function treeModifier(treeNode, modFunc){
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
      for (const node of treeNode.descendents) {
          treeModifier(node, modFunc);
      }
    }
}

let a = [];
let b = [];
alert( a === b);



/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to have ***    ***
 */
function starFunction(node){
    node.value = "***" + node.value + "***";
    return undefined;
}

/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to be upper case
 */
function caps(node){
    node.value = node.value.toUpperCase();
}

/**
 * 
 */
class TreeNode {
    /**
     * 
     * @param {string} value is name for simpson character
     */
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
    }
    // create nodes with values
    const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer');
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
    // associate root with is descendents
    abe.descendents.push(homer);
    homer.descendents.push(bart, lisa, maggie);

    console.log(treeModifier(abe, caps));
    console.log('now tree has stars', abe);

