let score = "33abc";

console.log(typeof score);           // string(because in double quotes)
console.log(typeof (score));         // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);   // number
console.log(valueInNumber);         // not a number(NaN)

valueInNumber = Number(null);
console.log(typeof valueInNumber);   // number    
console.log(valueInNumber);          // 0

valueInNumber = Number(undefined) ;
console.log(typeof valueInNumber);     // number
console.log(valueInNumber);            // NaN

valueInNumber = Number(true) ;
console.log(typeof valueInNumber);     // number
console.log(valueInNumber);           // 1

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanisLoggedIn);      // boolean
console.log(booleanisLoggedIn);             // true

isLoggedIn = ""
booleanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanisLoggedIn);    // boolean
console.log(booleanisLoggedIn);          //  false

isLoggedIn = "jahnvi"
booleanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanisLoggedIn);   // boolean
console.log(booleanisLoggedIn);         //  true


// Conclusion
/*
1 = true 
0 = false
"" = false
"jhanvi" = true
*/

let someNumber = 12
let stringNumber = String(someNumber);
console.log(stringNumber);          // 12
console.log(typeof stringNumber);   // string






