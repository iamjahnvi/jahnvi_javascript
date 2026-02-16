const myNumbers = [1 , 2, 3 , 4 , 5, 6, 7 ,8  ,9, 10] 

// ONE WAY OF PRINTING :-
// const newNums = myNumbers.map((num) => num + 10 )

// SECOND AY OF PRINTING :-
// const newNums = myNumbers.map((num) => {return num + 10})
// console.log(newNums);

// map also takes callBack function.


// CHAINING :-
const newNums = myNumbers
                   .map((num) => num + 10)
                   .map((num) => num*10 )
                   .filter((num) => num%3==0)
console.log(newNums);

// the value which of num that will be considered for second map is the value that has come after first map , and so and so.















