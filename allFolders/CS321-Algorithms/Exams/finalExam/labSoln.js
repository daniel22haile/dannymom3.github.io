const BT = require("../../classDemos/ADTs/BST/BinaryTree");
let bst = new bst.BinarySearchTree();
const BST = require("../../classDemos/ADTs/BST/BinarySearchTree");
const linkedList = require("../../classDemos/ADTs/Lists/dLinkedList");
//let bst = new bst.BinarySearchTree();
let bs = new BT.BinaryTree();
let dll = new linkedList.DLinkedList();

function findPrimeNumber(T) {​​​​​
    let arr = []
    primeHelper(T, T.root(), arr)
    return arr;
}​​​​​
function primeHelper(T, r, arr) {​​​​​
    if (T.isInternal(r)) {​​​​​
        primeHelper(T, r._left, arr)
            //console.log(r.element())
        if (isPrime(r.element())) {​​​​​
            arr.push(r.element())
        }​​​​​
        primeHelper(T, r._right, arr)
    }​​​​​
}​​​​​

//TODO - even element on BST

function findEvenNumbers(T) {​​​​​
    let arr = []
    evenHelper(T, T.root(), arr)
    return arr;
}​​​​​
function evenHelper(T, r, arr) {​​​​​
    if (T.isInternal(r)) {​​​​​
        evenHelper(T, r._left, arr)
            //console.log(r.element())
        if (isEven(r.element())) {​​​​​
            arr.push(r.element())
        }​​​​​
        evenHelper(T, r._right, arr)
    }​​​​​
}​​​​​
function isEven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    return isOdd(n - 1);
}

function isOdd(n) {
    if (n === 0)
        if (n == 0) return false;
    if (n == 1) return true;
    return isEven(n - 1);
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
//console.log(findPrimeNumber(bs))
 
function isPrime(n) {​​​​​
    if (n < 2) {​​​​​ return false }​​​​​
    for (let i = 2; i < n; i++) {​​​​​
        if (n % i == 0) {​​​​​
            return false
        }​​​​​
    }​​​​​
    return true
}

//TODO -- find min on BST
function findMin(T) {
    if (T.root() === null) return null;
    return minHelper(T, T.root());
}

function minHelper(T, current) {
    //base case
    if (T.leftChild(current) === null) return current.element();
    //OR if(T.isExternal(T.leftChild(current))) return current.element();
    //recursive step
    return minHelper(T, T.leftChild(current));
}
//TODO - find the maximum element from the BST
function findMax(T) {
    if (T.isEmpty()) return null;
    return maxHelper(T, T.root());
}

function maxHelper(T, current) {
    if (T.isExternal(T.rightChild(current))) return null;
    return maxHelper(T, T.rightChild(current));
}

//TODO -- return in linkedList by traversing inOrder from BST
function inOrder(bst) {
    let L = new linkedList.DLinkedList();
    inOrderHelper(bst, L, bst.root())
    return L;
}

function inOrderHelper(bst, L, p) {
    if (bst.isInternal(p)) {
        inOrderHelper(bst, L, bst.leftChild(p));
        L.insertLast(p.element());
        inOrderHelper(bst, L, bst.rightChild(p));
    }
}
let root = bs.insertRoot(5);
bs.insertLeft(root, 6);
let r = bs.insertRight(root, 8);
bs.insertRight(r, 9);
//sum of BT integer
//sum

console.log("inOrder traversal for a binary tree");
bst.insertItem(9, 3);
bst.insertItem(4, 3);
bst.insertItem(2, 3);
bst.insertItem(10, 3);
bst.insertItem(3, 3);
console.log(inOrder(bst).toString());