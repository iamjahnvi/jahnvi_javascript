// let score = "33abc";

// console.log(typeof score);      
//                                      // string(because in double quotes)
// console.log(typeof (score));         // string

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);   // number
// console.log(valueInNumber);         // not a number(NaN)

// valueInNumber = Number(null);
// console.log(typeof valueInNumber);   // number    
// console.log(valueInNumber);          // 0

// valueInNumber = Number(undefined) ;
// console.log(typeof valueInNumber);     // number
// console.log(valueInNumber);            // NaN

// valueInNumber = Number(true) ;
// console.log(typeof valueInNumber);     // number
// console.log(valueInNumber);           // 1

// let isLoggedIn = 1;
// let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanisLoggedIn);      // boolean
// console.log(booleanisLoggedIn);             // true

// isLoggedIn = ""
// booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanisLoggedIn);    // boolean
// console.log(booleanisLoggedIn);          //  false

// isLoggedIn = "jahnvi"
// booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanisLoggedIn);   // boolean
// console.log(booleanisLoggedIn);         //  true


// Conclusion
/*
1 = true 
0 = false
"" = false
"jhanvi" = true
*/

// let someNumber = 12
// let stringNumber = String(someNumber);
// console.log(stringNumber);          // 12
// console.log(typeof stringNumber);   // string

// **************OPERATIONS**************

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello"
let str2 = " jahnvi"
let str3 = str1 + str2
// console.log(str3)

// console.log(1 + "2");        // 12
// console.log("1" + 2);        // 12
// console.log("1" + 2 + 2);    // 122
// console.log(1 + 2 + "2");    // 32
// console.log(1 + "2" + 3)     // 123

/* Conclusion:-
case of 2 elements :  element-1 + element-2
                      string    + number   = string
                      number    + string   = string

case of 3 elements : 
-if first few elements = string , then whole addition process acc. to string.
-if first few elements = numbers , then they will be added then added as string with last element.

*/

// console.log(+true);  // 1
// console.log(true+);  // throws errors

// console.log(+"");    // 0
// when we put "+" as prefix , then it doesn't change the value of whatever is written after it.

// let num1 , num2 , num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);  // 101

gameCounter = 100;
++gameCounter;
console.log(gameCounter);  // 101

