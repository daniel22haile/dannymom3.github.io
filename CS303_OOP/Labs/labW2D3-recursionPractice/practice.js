"use strict";

//TODO -Q4. Create a new constructor functionListNode (based on TreeNode below) and
//TODO   use it to generate a linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.

let list = { name: "Abe" };
list.next = { name: "Homer" };
list.next.next = { name: "Bart" };
list.next.next.next = { name: "Lisa" };
list.next.next.next.next = { name: "Maggie" };

console.log(list);

/* Output
{
  name: "Abe",
    next: {
    name: "Homer",
      next: {
      name: "Bart",
        next: {
        name: "Lisa",
          next: {
          name: "Maggie"
        }
      }
    }
  }
}
*/

//TODO - Q2. Given a target value, return true or false if there is a node in the tree with the target value.  
// E.g., contains(tree, “Lisa”) →truecontains(tree, “Crusty”) →false
{
    class TreeNode1 {
        constructor(value) {
            this.value = value;
            this.descendents = [];
        }
    }
    // create nodes with values
    const abe1 = new TreeNode1('Abe');
    const homer1 = new TreeNode1('Homer');
    const bart1 = new TreeNode1('Bart');
    const lisa1 = new TreeNode1('Lisa');
    const maggie1 = new TreeNode1('Maggie');
    // associate root with is descendents
    abe1.descendents.push(homer1);
    homer1.descendents.push(bart1, lisa1, maggie1);

    function contains(node, target) {
        /* base case -- if children is null or empty */
        if (node.descendents === null) {
            if (node.value === target) {
                return true;
            } else {
                return false;
            }
        } else { //reductive recursion step
            let childResult = false;
            if (node.value === target) {
                return true;
            }
            for (let child of node.descendents) {
                childResult = contains(child, target);
                if (childResult === true) {
                    return true;
                }
            }
            return false; //did not find the target 
        }
    }

    console.log(contains(abe1, "Homer"));

}