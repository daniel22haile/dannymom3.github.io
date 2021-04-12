"use strict";

const obj = {
    arrVal: ['a', 'b', 'c'],
    get latest() {
        if (this.arrVal.length === 0) {
            return undefined;
        }
        return this.arrVal[this.arrVal.length - 1];
    }
};

console.log(obj.latest);
// expected output: "c"