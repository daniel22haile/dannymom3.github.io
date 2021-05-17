"use strict";

const HashMap = require("../../classDemos/ADTs/hashTable/HashMap");
const dl = require("../../classDemos/ADTs/Lists/dLinkedList");

//TODO - removeDuplicates
function  removeDuplicates(list) {    
    let  hashTable = new  HashMap.HashMap();   
    // every pair in each table indices  
    for (let  node  of  list) {      // same keys not mapped(no overwrite)     
        if (!hashTable.contains(node.key())) { 
            // insert into the new created hashTable   
            hashTable.put(list.key(), list.value())        
        }    
    }  
    // return every keys of pairs in each new hashtable index   
    return  hashTable.keys();  
}

//TODO - checkForSum

//todo - method 2 - check for sum
function checkForSum(list, z) {
    let map = new HashMap();
    let itera = list.element();
    while (itera.hasNext()) {
        let obj = itera.nextObject();
        if (!map.contains(z - obj)) //obj + y = z,  y = z - obj
            return false;
        else
            map.put(obj, obj);
    }
    return true;
}

function  checkForSum(list, z) {   
    let  hashTable = new  HashMap.HashMap(); 
    for (let  node  of  list)  { 
        // value is the second searched number          
        let  value  =  hashTable.get(z  -  node.key()); 
        // gives z when added with node.key()   
        if (value  ===  null)  {                                 
            map.put(node.key(),  node.value());       
        } else  {     
            // key is existed       
            return  true;        
        }
    }
} 


//TODO --- teacher's soln'

function removeDup(list) {
    let map = new HashMap.HashMap();
    let iter = list.element();
    while (iter.hasNext()) {
        let ob = iter.nextObject();
        if (!map.contains(ob))
            map.put(ob, ob);
    }
    return map.keys();
}

let arr = [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5];

let list = new dl.LinkedList();
list.insertLast(8);
list.insertLast(81);
list.insertLast(38);
list.insertLast(58);
removeDup(arr).print();



function removeDpus(list) {
    let hashMap = new HashMap();
    let iterator = list.element();
    while (iterator.hasNext()) {
        let ob = iterator.nextObject();
        if (!hashMap.contains(ob))
            hashMap.put(ob, ob);
    }
    return hashMap.keys();
}


function removeDups2(list) {
    let map = new HashMap();
    let iterator = list.element();
    while (iterator.hasNext()) {
        let obj = iterator.nextObject();
        if (!map.contains(obj))
            map.put(obj, obj);
    }
    return map.keys();
}


function inOrder(T) {
    if (T.isEmpty()) return null;
    return inOrderHelper(T, T.root());
}

function inOrderSum(T, current) {
    if (T.isExternal(current)) return 0;
    let left = current._left();
    let right = current._right();
    return inOrderHelper(current.left) + inOrderHelper(current.right) + current.element();
}