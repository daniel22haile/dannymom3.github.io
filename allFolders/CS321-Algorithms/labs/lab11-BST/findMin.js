const DLL = require("./dLinkedList");
let doublelyLinkedList = new DLL.DLinkedList();
//TODO -- ??
function findMin(T) {
    if (T.root() === null) {
        throw "Empty tree";
    }
    let current = T.root();
    while (current !== null) {
        current = current.leftChild(); // go to the left child
    }
    return current.element();
}

function findMin(T) {​​​​​   
    return findMinHelper(T, T.root())   
}​​​​​   
function findMinHelper(T, r) {​​​​​   
    if ((r._left == null && r._right == null)) {​​​​​   
        return r.element()    
    }​​​​​
    else {​​​​​   
        return findMinHelper(T, r._left)    
    }​​​​​   
}

   
console.log(findMin(bs))
    //TODO ---- ???


function inOrder(T) {​​​​​
    return inOrderHelper(T, T.root());
}​​​​​
function inOrderHelper(T, k) {​​​​​
    let node = new LL.DLinkedList()
    if (T.isInternal(k._left)) {​​​​​
        return inOrderHelper(T, k._left)
    }​​​​​

    node.insertAfter(T, k.element())
    if (T.isInternal(k._right)) {​​​​​
        return inOrderHelper(T, k._right)
    }​​​​​
    return node;
}​​​​​