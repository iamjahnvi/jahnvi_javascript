// Two ways of creating Strings

// > string can be created as primitives 
// eg : const string = "a string primitive"

//> string can be created as constructors using String("")
// eg : const str = new String("a string object")

const str = new String('you are special');
console.log(str.length);
console.log(str.toUpperCase)
console.log(str.toLowerCase)
console.log(charAt(5))

const a = "a"
const b = "b"
if(a < b){
    console.log(`${a} is smaller than ${b}`);
} else if (a > b){
    console.log(`${a} is greater then ${b}`);
} else {
    console.log(`${a} is equal to ${b}`);
}


