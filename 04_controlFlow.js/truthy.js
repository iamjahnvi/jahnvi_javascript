const userEmail1 = "abc@gmail.com"
if(userEmail1){
    console.log("Got user email");
} else {
    console.log("Didn't get user email"); 
}

// we noticed that if-else considers an empty string "" as false only , and then enters the code of block inside else statement.

// also, it considers an array as true , and prints the first block of code.

// Falsy values -

// false 
// 0
// -0 
// BigInt - 0n
// "" - empty string
// null
// undefined
// NaN

// Truthy values
// "0" - zero inside string
// "false" - false inside string
// " " - space inside string
// [] - empty array
// {} 
// function() {} - empty function


// WHEN INPUTED VALUE IS AN EMPTY ARRAY
const userEmail2 = []
if(userEmail2){
    console.log("Got user email");
} else {
    console.log("Didn't get user email"); 
}

console.log(typeof userEmail2);
// type of an array is object.

console.log(userEmail2.length);  
// the length of an empty array is 0.

if(userEmail2.length===0){
    console.log("Array is empty")
}

// WHEN INPUTED VALUE IS EMPTY OBJECT
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
} else {
    console.log("Object is not empty")
}

//#interview 
// false == 0     => true
// false == ''    => true
// 0 == ''        => true

// Nullish Coalescing Operator (??) : null undefined

let val1 = 5 ?? 10
console.log(val1)
// here it printed 5

let val2 = null ?? 10
console.log(val2)
// val2 prints 10 , why?
// because this Nullish Coalescing Operator is the operator which does the safety checking , by seeing if any of the value is null , then it will take the non-null value in consideration.

let val3 = undefined ?? null
console.log(val3)
// here it printed null

let val4 = 10 ?? undefined
console.log(val4)
// 10

let val5 = null ?? 20 ?? 10
console.log(val5)
// in this case , the first value after null is printed always.

// Terniary operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("will not buy") : console.log("will buy")
