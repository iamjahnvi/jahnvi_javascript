// Two ways of creating Strings

// > string can be created as primitives 
// eg : const string = "a string primitive"

//> string can be created as constructors using String("")
// eg : const str = new String("a string object")

const str = new String('you are special');
console.log(str.length);
console.log(str.toUpperCase)
console.log(str.toLowerCase)
console.log(str.charAt(5))

const a = "a"
const b = "b"
if(a < b){
    console.log(`${a} is smaller than ${b}`);
} else if (a > b){
    console.log(`${a} is greater then ${b}`);
} else {
    console.log(`${a} is equal to ${b}`);
}

const str1 = "hemply is a humble guy"
const str2 = " and very helpful."

console.log(str1.concat(str2));
console.log(str1.localeCompare(str2))

// here str1 is reference string and str2 is compare string.
// returns -1 : reference string > compare string.
// returns 1 : compare string > reference string
// return 0 : compare string == reference string

const fullName = "   delina   "

console.log(fullName.trim());
// trims from both sides

console.log(fullName.trimEnd());
// trims from end only

console.log(fullName.trimStart());
// trims from start only



