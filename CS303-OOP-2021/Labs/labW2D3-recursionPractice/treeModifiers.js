"use strict";

//TODO -- Q6
/*
Write a recursive function, treeModifier,  that will take a tree and a modifier function as parameters.  
Walk through the tree and apply the function to each node.  
The function should apply the following operations to eachnode.  treeModifier(tree, modiferFunc)
     •allCaps(node) will change the value of a node to be all caps.  
     •addStars(node) will change the value to have  *** in front and behind the node value.
     •reverseNode(node) will reverse the string of the node value.  Abe -> ebA

Call your recursive function with each of these modifier functions.
*/
{
    function treeModifier(treeNode, modFunc) {
        modFunc(treeNode);
        if (treeNode.descendents.length === 0) {
            return undefined;
        } else { //loop through the array of descendents and recursively call treeModifier
            for (const node of treeNode.descendents) {
                treeModifier(node, modFunc);
            }
        }
    }

    let a = [];
    let b = [];
    console.log(a === b);

    function starFunction(node) {
        node.value = "***" + node.value + "***";
        return undefined;
    }

    function caps(node) {
        node.value = node.value.toUpperCase();
    }


    class TreeNode {

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

    console.log(treeModifier(homer, starFunction));
    console.log('now tree has stars', abe);

}