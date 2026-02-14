// var c = 300
let a = 300

if(true){
    // block scope
    let a = 10
    console.log(`inner a : ${a}`)
    const b = 20
    var c = 30 

}
console.log(`outer a : ${a}`);

// console.log(b);
// a and b have local scope.

console.log(c);
// c has global scope.
// even when we defined c globally , then also it has printed the value of c as 30.

//#interview question : the global scope in runtime code environment which is vs code and the global scope in console(after inspecting) is different.

//   CASE 1
function one(){
    const username = "pixie"

    function two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website)
    two()
}
one()

// this is the only case when it will print username - pixie.

//   CASE 2
function one(){
    const username = "pixie"

    function two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website)
    // two()
}
one()
// in this case , we are calling big function - one but inside it there's no print statement hence no output.

//   CASE 3
function one(){
    const username = "pixie"

    function two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website)
    two()
}
// one()

// in this case , even when we haven't commented function - two, it will not print anything , because it is inside function one , which is bigger function , only when we call bigger functionn , we'd be able to run the function inside it , which is function - two.

// CASE 4
// function one(){
//     const username = "pixie"

//     function two(){
//         const website = "youtube"
//         console.log(username);    
//     }
//     // console.log(website)
// }
// two()
// ReferenceError: two is not defined 
// the above written error will show up.

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ReferenceError: website is not defined
// this is the error which it will show up.

// ++++++++++++++++ interesting concept ++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}
// it will print the output , even when the print statement is written before the declaration of function - addOne.

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
// ReferenceError: Cannot access 'addTwo' before initialization
// it will display the above written error because , we are writing the print statement even before decl








