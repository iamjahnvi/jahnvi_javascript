// Date

// building constructor
// let myDate = new Date()

// console.log(myDate);            
// // 2026-02-11T12:10:25.425Z

// console.log(myDate.toString());
// // Wed Feb 11 2026 17:42:38 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());
// // Wed Feb 11 2026

// console.log(myDate.toISOString());
// // 2026-02-11T12:15:09.690Z

// console.log(myDate.toJSON());
// // 2026-02-11T12:15:53.049Z

// console.log(myDate.toLocaleDateString());
// // 11/2/2026

// console.log(myDate.toLocaleString());
// // 11/2/2026, 5:47:00 pm

// console.log(myDate.toLocaleTimeString());
// // 5:47:35 pm

// console.log(myDate.toTimeString());
// // 17:48:10 GMT+0530 (India Standard Time)

// console.log(myDate.toUTCString());
// // Wed, 11 Feb 2026 12:18:38 GMT

// console.log(myDate.getFullYear());
// // 2026

// console.log(myDate.getDay());
// // 3  (because wednesday)

// console.log(myDate.getDate());
// // 11

// console.log(typeof myDate);
// // object 
// // it is very important for us to remember that myDate is an object in js.

// NOW WE WILL UNDERSTAND HOW FORMAT OF DATING WORKS WHEN WE PASS INPUT :-

let newDate = new Date(2023 , 0 , 12);
console.log(newDate.toLocaleDateString());
// 12/1/2023
// year - 2023 , month(in ouput) = month(in input) + 1 , date - 12
// months of the year are indexed , which began from 0 , that's why , 0th index - jan , 1st ind
// thing which we have to keep in mind is that month in output is always going to be [1 + month(in input)]

// SOME MORE CASES :-

let exampleDate = new Date(2023 , -12 , 12);
console.log(exampleDate.toLocaleDateString());
// 12/11/2022
// when we give month as -ve in input then it displays month as (12 - n + 1) , n = number(without sign)








