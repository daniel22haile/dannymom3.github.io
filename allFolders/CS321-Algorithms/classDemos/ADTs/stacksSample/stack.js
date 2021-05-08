"use strict";

class Stack {
    constructor() {
        this.list = [];
        this.count = 0;
    }

    //Add element to top of stack.
    push(item) {
        this.list[this.count] = item;
        this.count++;
    }

    //Return and remove top element in stack
    //Return undefined if stack is empty
    pop() {
        if (this.count === 0) return undefined;
        let deleteItem = this.list[this.count - 1];
        this.count--;
        return deleteItem;
    }

    peek() {
        if (this.count === 0) return undefined;
        return this.list[this.count - 1];
    }

    getResult() {
        return this.list;
    }
}

let stack = new Stack();
stack.push(4);
stack.push(10);
stack.push(20);
stack.push("danny1");
stack.push("danny2");
stack.push("danny3");
console.log(stack.getResult());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());