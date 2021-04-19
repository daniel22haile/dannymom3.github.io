let abc = [{age: 42}, {age: 40}]
console.log(abc.map(e => e.age).reduce((max, value) => {if(max>value) return max; return value}, 0));

////////////////////////////////////
function myMap(arr, func){

    let newArr = [];
    for(let e of arr){
      newArr.push(func(e))
    }
    return newArr
  }
  
  let testArr = [3,6,20];
  function double(num){
    return 2*num;
  }
  
  console.log(myMap(testArr, double))