// "use strict";


// function ietrate(list) {
//     console.log(list.name + ": " + list.value);
//     if (list.children === null) return;

//     list.children.forEach(element => {
//         ietrate(element)
//     });
// }

// // function callName(list) {
// //     console.log(list.value);
// //     if (list.descendents === null) return;

// //     list.descendents.forEach(element => {
// //         callName(element)
// //     });
// // }

// function callName(list, name) {
//     if (list.children === null) {
//         if (list.name === name) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         if (list.name === name) {
//             return true
//         }
//         let result = false;
//         for (let element of list.children) {
//             result = callName(element, name);
//             if (result === true) {
//                 return result
//             }
//         }
//     }
//     return false;
// }


// let node3 = {
//     name: "p",
//     value: "This is text in the a paragraph",
//     children: null
// };
// let node4 = {
//     name: "label",
//     value: "Name",
//     children: null
// };
// let node5 = {
//     name: "input",
//     value: "this was typed by a user",
//     children: null
// };
// let node2 = {
//     name: "div",
//     value: null,
//     children: [node4, node5]
// };
// let node1 = {
//     name: "body",
//     children: [node2, node3],
//     value: null,
// };

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.descendents = [];
//     }
// }
// // create nodes with values
// const abe = new TreeNode('Abe');
// const homer = new TreeNode('Homer');
// const bart = new TreeNode('Bart');
// const lisa = new TreeNode('Lisa');
// const maggie = new TreeNode('Maggie');
// // associate root with is descendents
// abe.descendents.push(homer);
// homer.descendents.push(bart, lisa, maggie);

// let value = node1;
// ietrate(value)
// let value1 = abe;
// console.log(callName(node1, "input"))


// function getNode(list, name) {
//     if (list.descendents === null) {
//         if (list.value === name) {
//             return list
//         } else {
//             return null
//         }
//     } else {
//         if (list.value === name) {
//             return list
//         }

//         let value = null;
//         for (let e of list.descendents) {
//             value = getNode(e, name);
//             if (value !== null) {
//                 return value
//             }

//         }
//     }
//     return null;
// }

// console.log(getNode(abe, "Maggie"))

// function treeModifier(tree, func) {
//     tree.value = func(tree);
//     if (tree.descendents === null) {

//         return tree;
//     } else {
//         tree.value = func(tree);
//         for (let e of tree.descendents) {

//             treeModifier(e, func);

//         }
//     }
//     //return tree
// }


// function addV(node) {
//     return "*** " + node.value + " ***"
// }

// console.log(treeModifier(homer, addV))

// /////////////////////////////////////////////////////Stop watch.

// function stopWatch(startTime) {
//     let current = startTime;
//     let watchId = setInterval(logTime, 1000);

//     function logTime() {
//         console.log(current);
//         if (current === 0) {
//             clearInterval(watchId)
//         } else {
//             current = current - 1;
//         }
//     }
// }

// stopWatch(3)




"use strict"
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

let password = askPassword.bind(user);

askPassword(password(user.loginOk), password(user.loginFail));
