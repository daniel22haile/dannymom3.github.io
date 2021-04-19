// "use strict";




// let node3 = {​​​​​​​​
//     name: "p",
//     value: "This is text in the a paragraph",
//     children: null
// }​​​​​​​​;
// let node4 = {​​​​​​​​
//     name: "label",
//     value: "Name",
//     children: null
// }​​​​​​​​;
// let node5 = {​​​​​​​​
//     name: "input",
//     value: "this was typed by a user",
//     children: null
// }​​​​​​​​;
// let node2 = {​​​​​​​​
//     name: "div",
//     value: "null",
//     children: [node4, node5]
// }​​​​​​​​;
// let node1 = {​​​​​​​​
//     name: "body",
//     children: [node2, node3],
//     value: "null",
// }​​​​​​​​;
// //find the longest value in the tree so compare the 
// //length of each value.length then return the longest one!!
// functionprintNameValue(node) {​​​​​​​​
//     //console.log(node.name,' ',node.value)
//     let longestN = node.value.length;
//     let resu = ""
//     if (node.children === null) {​​​​​​​​
//          return null
//      }​​​​​​​​else {​​​​​​​​
//         for (leteleofnode.children) {​​​​​​​​
//             if (ele.value.length > longestN) {​​​​​​​​
//                 longestN = ele.value.length
//                 resu = ele.value
//             }​​​​​​​​
//             printNameValue(ele)
//         }​​​​​​​​
//     }​​​​​​​​
//     return resu;
// }​​​​​​​​
// let x = printNameValue(node1)
// console.log(x)