const array123 = [1, 2, 3];

// const result = array123.map((element) => Math.pow(element, 2));
// console.log(result);

const result = array123.reduce((sum, current) => sum + current, 0);
console.log(result);