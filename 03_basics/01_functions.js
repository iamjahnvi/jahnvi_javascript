// ONE WAY OF DEFINING FUNCTION :-

const name = function(){
    console.log("H") ,
    console.log("i") ,
    console.log("t") ,
    console.log("e") ,
    console.log("s") ,
    console.log("h") 
}

// name() ;
// name is reference of function and () is for execution.
// if we only write reference of function[name], then it is not going to print anything.

// OTHER WAY OF DEFINING FUNCTION :-

function myName() {
    console.log("H") ,
    console.log("i") ,
    console.log("t") ,
    console.log("e") ,
    console.log("s") ,
    console.log("h")  
}
// myName()

function add(num1 , num2){
    // num1 and num2 - parameters.
    console.log(`The sum of ${num1} & ${num2} is ${num1+num2}.`);
}
// 3 and 4 - arguments

// add(3, 4)            // The sum of 3 & 4 is 7.
// add(3 , "4")         // The sum of 3 & 4 is 34.
// add(3 , "a")         // The sum of 3 & a is 3a.
// add(3 , null)        // The sum of 3 & null is 3.
// add(3 , undefined)   // The sum of 3 & undefined is NaN.

function addTwoNums(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNums(3 , 4)
// console.log("Result:",result)

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter correct username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("pixie"))     // pixie just logged in 
console.log(loginUserMessage());           // undefined just logged in
console.log(loginUserMessage(""));        //  just logged in


function loginMessage(username){
    if(!username){
        console.log("please enter correct username")
        return
    }
    return `${username} just logged in`
}
console.log(loginMessage());           // undefined just logged in
// point to be remembered is that we have to remember that js considers "" - (empty string) and undefined as false , so when username is undefined or false , we put ! before it so that it becomes true , and the block of code written within it gets executed.

function loginUser(username = "om"){
    if(!username){
        console.log("please enter correct username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser());
// min. value in this function will be "om"

// HOW TO DEFINE FUNCTION WHEN WE DON'T KNOW THE TOTAL NUMBER OF ARGUMENTS

function calcCartPrice(...price){
    return price
}
console.log(calcCartPrice(2000, 100 , 400 , 3500));
// it will return an array with the price of all stuff in cart. [2000 , 100 , 400 , 3500]
// this (...) is called as rest operator in js, similar to VarArgs in java.

function calcMarks(val1 , val2 ,...marks){
    return val1 , val2 , marks
}
console.log(calcMarks(100 , 100 , 97 , 98 , 95 ));
// it will only print an array consisting marks(not vals)
// [97 , 98 , 95]

const user = {
    username : "hitesh" , 
    price : 199
}

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleobject(user)
// we can either make object like user and then pass it in function

handleobject({
    username : "sam" ,
    price : 399
})
// this is the key-value pair we passes in function - handleObject.

const myNewArray = [200 , 100 , 400 , 600]
function returnSecondValue(getArray){
    return getArray[1] 
}
console.log(`The second value in the array is ${returnSecondValue(myNewArray)}`)

//------------OR-----------------------

function findSecondValue(getArray){
    return getArray[1]
}
console.log(findSecondValue([200 , 100 , 400 , 600]))
// this is also one way , where we don't make object earlier and only pass the array at the time of calling the function.

