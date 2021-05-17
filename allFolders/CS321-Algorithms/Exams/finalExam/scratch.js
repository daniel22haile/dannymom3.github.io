"use strict";
let key;
let tableSize = 8;
const hashcode = hashcode(key);
let hashvaluse = hashvalue(hashcode);

let h = hashcode % tableSize;

//TODO -- get(k)
let table = HashTable(h);
// get the value using key in the linked list of a hashtable

//linkedList l = table[h];
//Item  e = l.find(k);
return e.val; //This is used to return a value from a hashtable using a key

function getHashcode(key) {
    let stringTypeKey = key.toString();
    return stringTypeKey.hashcode();
}

let myKey = "Daniel";
console.log(getHashcode(myKey));


function hashcode(astring) {
    let hashcode = 0;
    for (let i = 0; i < astring.length; i++) {
        const charCode = astring.charcodeAt(i);
        hashcode += charCode * Math.pow(2, i);
    }
    return hashcode;
}