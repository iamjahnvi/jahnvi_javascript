const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// when we wrote the above array in console of browser , and inspected it afterwards , we found out that forEach loop is itself embedded in the global object window or it is defined as one of the in-built methods which we can implement on array to iterate upon it.

// forEach loop wants a callBack function inside it , due to which we don't write the name of the function and just write the way we are going to access it. we can call the elements of loop , anything ,item/element/value etc etc


// CALL BACK INSIDE ForEach LOOP

// coding.forEach(function (item) {
//     console.log(item);
// })


// ARROW FUNCTION INSIDE ForEach LOOP
// coding.forEach( (item) => {
//     console.log(item);
// })


// FOR EACH FOR FUNCTION DEFINED ALREADY
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


// FOR-EACH LOOP WHERE CALLBACK FUNCTION IS ARROW-FUNCTION(with more than one parameter inside it)
coding.forEach((item , index , arr) => {
    console.log(item , index , arr)
})

// objects inside array :-
const myCoding = [
    {
        languageName : "javascript" ,
        languageFileName : "js"
    } ,
    {
        languageName : "java" ,
        languageFileName : "java"
    } ,
    {
        languageName : "python" ,
        languageFileName : "py"
    } ,
    {
        languageName : "C++" ,
        languageFileName : "c"
    } ,
    {
        languageName : "ruby" ,
        languageFileName : "rb"
    }
]

myCoding.forEach((languageName , languageFileName) => {
    console.log(languageName , languageFileName)
})

// Output when we wrote arrow function as callBack function with parameters inside it :-

// { languageName: 'javascript', languageFileName: 'js' } 0
// { languageName: 'java', languageFileName: 'java' } 1
// { languageName: 'python', languageFileName: 'py' } 2
// { languageName: 'C++', languageFileName: 'c' } 3
// { languageName: 'ruby', languageFileName: 'rb' } 4

myCoding.forEach(function (item) {
    console.log(item)
})

// Output when we wrote this above function as callBack function :-
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'py' }
// { languageName: 'C++', languageFileName: 'c' }
// { languageName: 'ruby', languageFileName: 'rb' }




