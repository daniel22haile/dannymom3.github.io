"use strict";
let linkedList = { value: 1 };
linkedList.next = { value: 2 };
linkedList.next.next = { value: 3 };
linkedList.next.next.next = { value: 4 };

console.log(linkedList); //TODO - Expected --> { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

let secondList = linkedList.next.next;
linkedList.next.next = null;
console.log(secondList); //TODO - EXPECTED -->  { value: 3, next: { value: 4 } }
console.log(linkedList); //TODO - EXPECTED -->  { value: 1, next: { value: 2, next: null } }

//TODO - Rejoin the deleted nodes

linkedList.next.next = secondList
console.log(linkedList);