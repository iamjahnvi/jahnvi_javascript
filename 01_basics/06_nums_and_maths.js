// There are two ways of creating Score as Numbers.

// Primitive way :
// const score = 4000
// console.log(score)       
// output : 4000

// Non-primitive way
// const balance = new Number(1000)
// console.log(balance)       
// output : [Number : 1000]
          
// console.log(balance.toString());
// console.log(typeof balance.toString()); 
// string
// the perk that we get after converting number to string is that now, we can implement all features of string.

// console.log(balance.toString().length);
// returns length 

// console.log(balance.toString().charCodeAt(2));
// Returns a number that is the UTF-16 code unit value at the given index.

// console.log(balance.toString().codePointAt(2))
// Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos

// console.log(balance.toString().endsWith("1"));
// we put value inside method using by converting it into string.
// returns boolean value - true/false 

// console.log(balance.toString().includes("2"));
// returns boolean value - true/false

// console.log(balance.toString().indexOf("1"));
// tells the index of first appearance of element.

// console.log(balance.toString().isWellFormed());
// Emoji = 2 parts

// Half emoji = lone surrogate

// Lone surrogate = broken string

// isWellFormed() = checks if it is broken or not.

// console.log(balance.toString().lastIndexOf("0"));
// index of element from end

// console.log(balance.toFixed(2)) 
// very important for e-commerce websites where we have to round off value upto certain decimal place ; (here 2).

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3))
// the number signifies the number of digits ans should have, and accordinly we will manage precision.

// const hundreds = 1000000000;
// console.log(hundreds.toLocaleString());
// it will put commas, to increase readability.

//-------------------------NUMBERS-----------------------
// Number is a built-in object, which provides utility tools to work with numbers.

// console.log(Number.EPSILON);
// Number.EPSILON is the smallest difference JavaScript can reliably notice between two numbers.

console.log(Number.isFinite("100"));
// returns true only in case of actual numbers .
// it doesn't convert strings

// console.log(Number.isInteger(10.3));
// returns true if value is integer, otherwise false.

// console.log(Number.isNaN(NaN));
// returns true only when value is NaN , otherwise false

// console.log(Number.parseInt("123"));
// converts string into number
// input-type : String
// output-type : Integer

// console.log(Number.parseFloat("145.54px"));
// converts string into decimal value
// input - string
// output - decimal value

// console.log(Number.parseInt("abcd"));
// if we pass string in this format, it will return NaN.

// +++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

console.log(Math); 
// highly useful library in js.

console.log(Math.abs(-4));
// converts negative values to positive values , but vice-versa is not possible.

console.log(Math.round(4.3));
// round off 4.3 to 4.

console.log(Math.ceil(4.2));
// rounds off to bigger natural number.
// output - 5

console.log(Math.floor(4.7));
// rounds off to smaller natural number.
// output - 4

console.log(Math.pow(2 , 3));

console.log(Math.sqrt(42));

console.log(Math.min(34 , 90 , 78 , 56));

console.log(Math.max(34 , 56 , 78 , 90));

console.log(Math.random());
// will display any random value between 0 and 1 , only.

console.log((Math.random()*10)+ 1);
// sometimes Math.random() also throws values 0.03 , when we multiply it by 10 , it still continues to remain 0 , in order to avoid output as 0 , we add 1 in it , so that we can get minimum ans as 0.

console.log(Math.floor(Math.random()*10) + 1);
// Math.floor rounds off the value inside brackets to nearest smallest value.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min) + 1) + min)



















