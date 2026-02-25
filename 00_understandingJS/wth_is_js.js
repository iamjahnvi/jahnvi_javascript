// JavaScript is :-
// >a cross - platform language - it can run easily on different browsers like windows , linux , macOS
// >a object-oriented language - js allows us to organize code using  objects and concepts like 

// 1. objects :-
// example : const car = {
//     brand : "SUV"
//     color : "Red"
//     start : function(){
//         console.log("Car started")
//     }
// };

// car.start();

// in the above stated example , car is the object , which has the key-value pair and a method called "start" which is a function to start the car.

// 2. encapsulation - bundling data + functions together 
// example : class person{
//     constructor(name){
//         this.name = name
//     }
//     greet(){
//         console.log(`hello ${name}`)
//     }
// }

// 3. inheritance
// class Animal {
//     speak(){
//         console.log("animal makes sound")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("woof!")
//     }
// }

// 4. abstraction
// >it means hiding internal details and showing only necessary details.
// example : when we use array.push(item) , we don't know how it internally functions

// 5. polymorphism - same method name , different functionality.
// class Cat(){
//     speak(){
//         console.log("meow!")
//     }
// }
// class Dog(){
//     speak(){
//         console.log("woof!")
//     }
// }

// important note : it is a prototype - based language , instead of more common class based model which means objects can inherit properties from other objects directly.
// In JS , every object has a hidden property called [[Prototype]] , which links it to another object.
// if a property/ method is not found in current object , JS looks up in its prototype , called as prototype chain.

// example - 
// const animal = {
//     speak(){
//         console.log("sound");
//     }
// }
// const dog = Object.create(animal);
// dog.speak()

// >is multi-paradigm , which means it supports :-
// -object-oriented programming
// -functional programming
// -procedural programming

// OOPs in details via example
// class person{
//     constructor(name){
//         this.name= name
//     }
//     greet(){
//         console.log(`hello ${name}`)
//     }
// }
// const p1 = new person("pixie")
// p1.greet()

// explaination of the example :-
// Step 1: class Person { ... }
// This is creating a blueprint.
// person is the name of the class.

// Step 2: constructor(name)
// The constructor is a special method , which runs automatically when we use "new" keyword.
// Why is it needed?
// It initializes (sets up) the object.

// Step 3: this.name = name
// this refers to the current object being created.
// So when we do:
// const p1 = new Person("Pranjal");
// js Creates an empty object { }
// Sets this to that object

// Assigns:
// this.name = name;
// So it becomes:
// p1 = {
//   name: "Pranjal"
// }

// Step 4: greet() { ... }
// This is a method (function inside class).
// It belongs to every object created from Person.

// Inside greet:
// console.log("Hello " + this.name);
// Again, this refers to the object calling it.
// So if p1 calls greet:
// this.name = "Pranjal"

// Output:
// Hello Pranjal

// Step 5: const p1 = new Person("Pranjal");
// When you use new, JavaScript does 4 things automatically:

// Creates empty object {}
// Sets this to that object
// Links it to Person.prototype
// Returns the object

// So internally it becomes:
// p1 = {
//   name: "Pranjal"
// }

// But it also has access to greet() via prototype.
// Step 6: p1.greet();

// Now we call the method.
// JavaScript looks for:
// Does p1 have greet directly? no
// Then it checks prototype → finds greet

// Then runs:
// console.log("Hello " + this.name);
// Since this = p1
// Output : Hello Pranjal

// the most imp. feature abt js is that it is not statically-typed language due to which it doesn't have strict type-checking.
// js is case-sensitive language.

// HASHBAG COMMENT : works similarly as that of normal comments(//) but begins with (#!) , and is only valid at the absolute start of a script module. it is exclusively used to specify a javascript interpreter, which provide the path to a specific JavaScript interpreter that you want to use to execute the script. 
// example : #!usr/bin/env/node


// the prototype based model provides dynamic inheritance , which means in JS , inheritance can change at runtime. 

// example :-
// const person = {};

// const student = Object.create(person);

// person.sayHi = function() {
//   console.log("Hi!");
// };

// student.sayHi(); Works!

// even though student was created before sayHi was added , it still inherits it.


































