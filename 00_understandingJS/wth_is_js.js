// JavaScript is :-
// >a cross - platform language - it can run easily on different browsers like windows , linux , macOS
// >a object-oriented language - js allows us to oragnize code using  objects and concepts like objects , classes , encapsultaion , inheritance , abstraction , polymorphism

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

// important note - it is a prototype - based language , which means objects can inherit from other objects directly
// example - 
// const animal = {
//     speak(){
//         console.log("sound");
//     }
// }
// const dog = Object.create(animal);
// dog.speak()

// >is multi-paradigm
// this means it supports :
// -object-oriented programming
// -functional programming
// -procedural programming

// OOPs in details  via example
// class person{
//     constructor (name){
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

// Think of class like a template for making people.

// It does NOT create a person yet.
// It just defines how a person should look and behave.

// person is the name of the class.

// Step 2: constructor(name)

// The constructor is a special method.

// It runs automatically when we create a new object using new.

// Why is it needed?

// It initializes (sets up) the object.

// So when you say:

// new Person("pixie")

// The constructor runs and receives "Pranjal" as name.

// 🔹 Step 3: this.name = name

// This is VERY important.

// What is this?

// this refers to the current object being created.

// So when we do:

// const p1 = new Person("Pranjal");

// JavaScript:

// Creates an empty object { }

// Sets this to that object

// Assigns:

// this.name = name;

// So it becomes:

// p1 = {
//   name: "Pranjal"
// }
// 🔹 Step 4: greet() { ... }

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

// Now magic happens 

// When you use new, JavaScript does 4 things automatically:

// 1️⃣ Creates empty object {}
// 2️⃣ Sets this to that object
// 3️⃣ Links it to Person.prototype
// 4️⃣ Returns the object

// So internally it becomes:

// p1 = {
//   name: "Pranjal"
// }

// But it also has access to greet() via prototype.

// 🔹 Step 6: p1.greet();

// Now we call the method.

// JavaScript looks for:

// Does p1 have greet directly? ❌

// Then it checks prototype → ✅ finds greet

// Then runs:

// console.log("Hello " + this.name);

// Since this = p1

// Output:

// Hello Pranjal
// 🔥 Visual Representation

// After everything runs:

// p1
//  ↓
// {
//   name: "Pranjal"
// }

// And through prototype:

// p1 → Person.prototype → greet()
// 🧠 Important Concepts Hidden Here
// 1️⃣ Class is syntactic sugar

// Behind the scenes, JavaScript is still using prototypes.

// This:

// class Person { }

// Is actually similar to:

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log("Hello " + this.name);
// };

// So JS is prototype-based, not truly class-based like Java.








































