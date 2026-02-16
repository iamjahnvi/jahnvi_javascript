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
console.log(newNums);

// filter being similar to forEach, takes 




























