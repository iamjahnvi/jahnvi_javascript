const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    // return item
})

// console.log(values)

// the idea of storing the implementation of forEach loop on array in a variable named as values , didn't return anything, it just printed all the elements written inside array , even if we write "return" statement.

// output :-
// js
// ruby     
// java     
// python   
// cpp      
// undefined

const myNums = [1 , 2 ,3 ,4 , 5 , 6 , 7 , 8 , 9, 10]
const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

// filter being similar to forEach, takes a callBack function and , filter can be understood as real life filters being used to filter numbers on the basis of condition stated. 
// in the above stated example , we used arrow function as the callBack function and have put the condition of printing numbers greater than 4 as the filtering condition.


// Another way of printing newNums
const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9  ,10]
const list = numbers.filter((num) => {
    return num > 4
})
// console.log(list)

// here we need to keep in mind that if we are using arrow function as callBack function , then once we put curly brackets , we have begun a local scope , that's why we are writing keyword - "return"


// without using filter(using forEach loop)
const alpha = [1 ,2 ,3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const beta = []
alpha.forEach((num) => {
    if(num > 4){
        beta.push(num)
    }
})

// console.log(beta)


const books = [
    {title : 'Book-1' , genre : 'fiction' , publish : '1981' , edition : '2002'} ,
    {title : 'Book-2' , genre : 'non-fiction' , publish : '1986' , edition : '2007'} ,
    {title : 'Book-3' , genre : 'science' , publish : '1988' , edition : '2009'} ,
    {title : 'Book-4' , genre : 'history' , publish : '1989' , edition : '2006'} ,
    {title : 'Book-5' , genre : 'geography' , publish : '1980' , edition : '2005'} ,
    {title : 'Book-6' , genre : 'fiction' , publish : '1982' , edition : '2007'}
]

// 1st way to print using filter and arrow function as callBack function


// let userBooks = books.filter((bk) => bk.genre === 'history')
// userBooks = books.filter((bk) => bk.publish >= 1985 )
// userBooks = books.filter((bk) => bk.edition >=2005 )
// console.log(userBooks);

// it is going to print all those books with their edition after 2005 , ignoring other print statements , solution to this is : -

let userBooks = books.filter((bk) => 
    bk.genre === 'history' &&
    bk.publish >= 1985     &&
    bk.edition >= 2005 
) ;

console.log(userBooks);


// output in the form of array 
// [  
//   {
//     title: 'Book-4',
//     genre: 'history',
//     publish: '1989',
//     edition: '2006'
//   }
// ]

// printing using filter and creating a local scope 
let infoBooks = books.filter((item) => {
    return item.genre === 'fiction'
})
// console.log(infoBooks)

let listOfBooks = books.filter((value) => {
    return  value.genre === 'history' && value.publish >=1985 &&
    value.edition >= 2005 
})

console.log(listOfBooks)

// printing using forEach loop 
let booksList = []
books.forEach((bk) =>{
   if(bk.genre === 'science'){
    booksList.push(bk)
   }
})
// console.log(booksList)


// printing bkL using forEach loop.
let bkL = []
books.forEach((val) => {
    if( val.genre === 'history' && val.publish >=1985 && val.edition >= 2005 ){
        bkL.push(val)
    }
})

console.log(bkL);





