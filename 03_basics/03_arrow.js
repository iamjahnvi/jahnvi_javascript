const user = {
    username : "pixie" ,
    price : 199 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to webiste`);
        console.log(this); 
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);       
// in the node environment , that is vs code , "this" refers to an empty object , in output , it will show {} but when write the same "this" in console(after inspecting) , it will show something related to windows, because windows is a globally accepted object.

function chai(){
    console.log(this)
    let username = "pixie"
    console.log(this.username);
}
chai()
// the "this" written inside chai , will display a lot of things in output, as like it showed in console.

// the "this.username"

function chai(){
    let username = "pixie"
    console.log(this.username);
}
chai()
// here it would print "undefined"


// Arrow function
const login = () => {
    let username = "pixie"
    console.log(this.username);
}
// login()
// here we used arrow function(put arrow) after parenthesis, still we got same ans - undefined.
// and printing only this will display an empty string. {}

// explicit return
const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(5 , 10));

// implicit return 
const addThree= (num1 , num2 , num3) =>  num1 + num2 + num3
console.log(addThree(5 , 10 , 15));

// also , we can write this way
const addFour = (n1 , n2 , n3 , n4) => (n1 + n2 + n3 + n4)
console.log(addFour(1 , 2 , 3 , 4));

// to print object , implicitly
const object = (num1 , num2) => ({username : "pixie"})
console.log(object(2 , 3));

// this example shows the importance of parenthesis because we can only print username , if we put it inside parenthesis.









