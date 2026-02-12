// there are two ways in which we define an objects , firstly literals & secondly as constructors.
// whenever we make an object using constructor , a singleton object is also formed(unique/ of it's own type)
// but when we define object using literals then no singleton object is formed , even multiple instances of an object are formed.

// Constructor method to create object is like this :-
// Object.create , which leads to building of singleton object.

// OBJECT LITERALS
const JsUser = {
    name : "Jahnvi",
    age : 18 , 
    location : "Delhi" ,
    email : "iamjahnvidwivedi@gmail.com" ,
    isLoggedIn : false , 
    lastLoginDays : ["Monday" , "Wednesday" , "Saturday"] , 
    "gender" : "female"
}

// in object we can define key : value pair , unlike arrays where we only have indexes to refer to values.
// inside object , name(key) is itself a string , and the value can be anything string , number , array.

// Ways of printing value(in key-value) pair.
console.log(JsUser.email);
console.log(JsUser["email"]);

// type of keys :-
console.log(typeof JsUser.email);            // string
console.log(typeof JsUser.name);            // string
console.log(typeof JsUser.age);             // number
console.log(typeof JsUser.isLoggedIn);      // boolean
console.log(typeof JsUser.location);        // string

// if we try to access the key(in key value pair inside object) , written inside double quotes , then we cannot access it through { console.log(JsUser.gender) } method

console.log(JsUser["gender"]);

// way to change value
JsUser.email = "xyz@gmail.com"

JsUser.greeting = function(){
    console.log("Hello dear");
}
 
// if we want to lock the value of email , and further , don't want to change it , then 
// Object.freeze(JsUser)

JsUser.email = "abc@gmail.com"
console.log(JsUser);
//the above console.log statement will not change the value of email as abc@gmail.com 

JsUser.greetingOne = function() {
    console.log("Hello dear") ;
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.name}`) ;
}
console.log(JsUser.greetingTwo());

// by typing the above console statements , we are making some change in JsUser so don't forget to remove Object.freeze(JsUser)

// STORY OF SYMBOL 

// declaration of Symbol 
const mySym = Symbol("key1")

// formation of object named as GitUser , which has key-value pair as mySym and mykey respectively.

const GitUser = {
    mySym : "myKey" 
} 

//#interview : WRONG way of accessing symbol (that we consider right!)
console.log(GitUser.mySym)

console.log(typeof GitUser.mySym);
console.log(GitUser);
// { mySym: 'myKey' }
 
// after printing the above console statement we found out that the typeof key stored inside variable(mySym) of datatype Symbol is not Symbol , instead it is String.

// CORRECT WAY OF DEALING WITH SYMBOL
const CssUser = {
    [mySym] : "mykey"
} 

console.log(CssUser[mySym])

console.log(typeof mySym); 
// now it will come out as Symbol.

console.log(CssUser);
// { Symbol(key1): 'mykey' }











