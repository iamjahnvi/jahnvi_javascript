// # Primitive Data-types (Call by value)
// 7 types : String , Number , Null , Undefined , Boolean , BigInt , Symbol

const score = 100;                // number
const scoreValue = 100.3;        // number
const isLoggedIn = false;       // boolean
const outsideTemp = null;      // null means empty, it's type is object.
let userEmail;                // undefined

const id = Symbol('123')        
const anotherId = Symbol('123')
console.log(id === anotherId);   // false

const bigNumber = 3456789345n

// Javascript is a dynamically typed language.

// symbol is a data type whose instances are unique and immutable.

// Reference Type (Non-primitive)
// Array , Objects , Functions

const pets = ["dogs" , "chicks" , "cats" , "hen"];

let studentId = {
    name : "delina" , 
    age : 19 ,
    gender : "female",
    course : "btech" ,
    phoneNo : 9899698663n
} 

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)              // bigint
console.log(typeof pets)                   // object
console.log(typeof myFunction)             // funcion object

// ***********STACK****************
// Stack(primitive)  , Heap(non-primitive)
// whenever we change something in stack memory, change is reflected in copy of data 
// whenever we change something in heap memory, change is reflected in original data,
// and that we can access by referencing.

let myYoutube = "hiteshchodharydotcom"
let anothername = myYoutube
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutube)

let userOne = {
    email : "user@gmail.com" ,
    upi : "user@xyz"
}

let userTwo = userOne
userTwo.email = "abc@gmail.com"

console.log(userTwo);
console.log(userOne);