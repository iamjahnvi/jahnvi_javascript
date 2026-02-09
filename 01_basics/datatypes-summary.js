// # Primitive Data-types (Call by value)
// 7 types : String , Number , Null , Undefined , Boolean , BigInt , Symbol

const score = 100;                // number
const scoreValue = 100.3;        // number
const isLoggedIn = false;       // boolean
const outsideTemp = null;      // null means empty, it's type is object
let userEmail;                // undefined

const id = Symbol('123')        
const anotherId = Symbol('123')
console.log(id === anotherId);   // false

const bigNumber = 3456789345n

// Javascript is a dynamically typed language.

// Reference Type (Non-primitive)
// Array , Objects , Functions

const pets = ["dogs" , "chicks" , "cats" , "hen"];

let studentId = {
    name : "delina" , 
    age : 19 ,
    gender : "female",
    course : "btech" 
} 

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)              // bigint
console.log(typeof pets)                   // object
console.log(typeof myFunction)             // funcion object
