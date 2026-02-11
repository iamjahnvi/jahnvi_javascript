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

// we can also date in the format of YYYY-MM-DD
let myCreatedDate = new Date("2026-02-11")
console.log(myCreatedDate.toLocaleString());

// in india , we prefer to write dates as MM-DD-YYYY
let myDate = new Date("01-14-2026")
console.log(myDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
// Date.now is the method which returns the number of milliseconds that have passed since january 1st , 1970 (UTC)
// this starting point is called Unix Epoch.

console.log(myDate.getTime());
// it converts the time from 1st jan 1970 to current date in milliseconds.

console.log(Math.floor(Date.now()/1000));
// what we did in the above stated code is , that we found the no.of milliseconds elapsed since midnight of 1st jan 1970 to till date , and then we converted it into seconds by dividing it to 1000 , and then because it gives answer in decimal format, we used Math.floor()


console.log(myDate.toLocaleString('default' , {
        weekday : "long"
})
);
// myDate is the instance of Date object , which has a method "toLocaleString" . we wrote default as the international standard , and then weekday as long , due to which weekday got displayed in full length.









