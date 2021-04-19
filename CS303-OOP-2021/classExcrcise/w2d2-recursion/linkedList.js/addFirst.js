"use strict";

let linkedList = { value: 1 };
linkedList.next = { value: 2 };
linkedList.next.next = { value: 3 };
//linkedList.next.next.next = { value: 4 };

console.log(linkedList);

let first = {
    value: "zest",
}
first.next = linkedList;
linkedList = first;

console.log(linkedList);


//TODO - Method two
//TODO - OR --> one line code
let first1 = { value: "zest", next: linkedList };
linkedList = first1;
console.log(linkedList);