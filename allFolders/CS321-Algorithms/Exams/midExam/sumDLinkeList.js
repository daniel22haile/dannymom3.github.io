const DLL = require("./dLinkedList");
const bst = require("./BinarySearchTree");
let BST = new bst.BinarySearchTree();
let doublelyLinkedList = new DLL.DLinkedList();


function sum(list) {
    let  iter  =  list.positions();
    let sum = 0;    
    while (iter.hasNext()) {       
        let node = iter.nextObject();
        sum += node.element();    
    }
    return sum;
}

function sum2(list) {
    let current = list.first();
    let sum = 0;
    while (current != list.last()) {
        let elem = current.element();
        sum += elem;
        current = list.after(current);
    }
    return sum + list.last().element();
}


doublelyLinkedList.insertLast(4);
doublelyLinkedList.insertLast(1);
doublelyLinkedList.insertLast(2);
doublelyLinkedList.insertLast(6);
doublelyLinkedList.insertLast(4);

console.log(sum2(doublelyLinkedList));
console.log(sum(doublelyLinkedList));
console.log(inOrder(doublelyLinkedList));


function inOrder(T) {
    inOrderHelper(this._root);
}


function inOrderHelper(root) {
    if (root !== null) {
        inOrderHelper(root.left);
        node.put(key);
        //console.log(root.key());
        inOrderHelper(root.right);
    }
}