// Array 

// FIRST WAY OF DEFINING ARRAY :-
const myArr = [0 , 1 , 2 , 3 , 4 , 5]
console.log(myArr)

// crazy fact - array in js consists of elements of varied types , it can have string , number(int and float) , boolean , all in one example of array.
// js arrays create shallow copies(copies sharing same reference value in stack memory)

// SECOND WAY OF DEFINING ARRAY :-
const myArr2 = new Array(6 , 7 , 8 , 9 , 10)
console.log(myArr2)

// array methods

myArr.push(6)
// add new elements

myArr.pop();
// removes last element of array

myArr.unshift(0);
// unshift adds the inputed element at the beginning of array. 
// it is generally not preferred at industrial level, becuase rn we had to shift just 7 elements , but at large scale we'd to shift elements in thousands, which will be super time consuming.

myArr.shift();
// remove the unshifted element.

console.log(myArr.includes(9));
// returns true if 9 is present, otherwise returns false.

console.log(myArr.indexOf(9));
// returns index of element, if inputed value is not present then returns -1.

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

console.log("A " , myArr);
// A [0 , 1 , 2 , 3 , 4 , 5]

const myn1 = myArr.slice(1 , 3)
// myn1 - my new array 1
// slice displays array elements with indexes from inputed range, excluding upper limit
console.log(myn1);

// const myn2 = myArr.splice(1 , 3)
// console.log(myn2);
// console.log(myArr);

// #interview question - role of splice
// splice displays elements with indexes from inputed range , including the upper limit 
// also , it changes the main array , now the main array only consists of elements which were not included at time of splice.

console.log(myArr.at(-2));
// returns the element at particular index.
// if inputed index is out of length of array , then it returns index as undefined.
// for negative index output = value at (array.length + negative index)






























