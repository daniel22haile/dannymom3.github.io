"use strict";

let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) { //take department as an array if it's an array
        return department.reduce((accum, current) => accum + current.salary, 0);
    } else {
        let sum = 0;
        for (let subDpt of Object.values(department)) {
            sum += sumSalaries(subDpt);
        }
        return sum;
    }
}
console.log(sumSalaries(company));