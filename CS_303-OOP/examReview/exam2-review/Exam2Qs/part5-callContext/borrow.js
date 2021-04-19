"use strict";

let me = {
    first: 'Daniel',
    last: 'H',
    getFullName: function() {
        return this.first + ' ' + this.last;
    }
};
let you = {
    first: 'Messay',
    last: 'D'
};

console.log(me.getFullName.bind(you)());