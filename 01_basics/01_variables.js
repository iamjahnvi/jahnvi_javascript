const accountId = 144553
let accountEmail = "abc@gmail.com"

var accountPassword = "12345"
// var is fuunction-scoped or globally-scoped variable , optionally initializing each to a value.

accountCity= "Jaipur"
let accountState ;
// declares a block-scoped , local variable , optionally initializing it to a value.

// accountId = 2;  // not allowed
accountEmail = "abc@gmail.com";
accountPassword = "212121";
accountCity = "Delhi";

console.log(accountPassword);
console.log(accountCity);
console.log(accountEmail);
console.log(accountId);

/*
prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

// const x;
// SyntaxError: Missing initializer in const declaration
// const is not going to assign it as undefined.


// A variable may belong to one of the following scopes
// ---------GLOBAL SCOPE-------------
// The default scope for all code running in script mode. properties of global scope :
// -variables declared with var become part of the global object.
// -functions become global , code shares the same global space.
// -strict mode is not enabled automatically.

// example :-
var name = "Pranjal";
let age = 20;

function greet() {
  console.log("Hello");
}

console.log(window.name);
// if you will execute the above here in vs code , then it will show ReferenceError : window is not defined.
// WHY ?
// because the code rn is running in node.js enviornment not in the environment of browser.
// but if you will do the same in browser, it will display pranjal as output.

// the node.js environment also, doesn't allows DOM access , that too is done on browser.

// now the question is , if in browser , variables with declaration of var associate them with window as global object , then in the node environment , what do these vaiables(with var declaration) , associate them with?

// answer is "global"
// console.log(global.name) will give pranjal in node.js environment.
// but if you think so, you are still incorrect.
// because then it will show "undefined" , because "var" still doesn't attach itself to global , because in modern Node.js , wach file is treated like a module(wrapped inside a function internally).


// -------------MODULE MODE----------------------
 
// when we type this in html 
{/* <script type="module" src="app.js"></script> */}

// or in node.js :
// import something from "./file.js";

// Now the file runs in module mode.

// properties of module mode :-
// -each file has its own scope.
// -variables are not added to the window.
// -strict mode is enabled automatically.
// -we can use import and export.

// example : 
// app.js (module mode)

// var name = "Pranjal";
// let age = 20;

// console.log(window.name); // undefined

// most important point to be noted here is that , even var does NOT attach itself to window in module mode.

// another most important point :-

// in script mode :-
// this === window  true

// in module mode :-
// this ===undefined true

// In modules , "this" at top level is undefined. 
// 




















// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.