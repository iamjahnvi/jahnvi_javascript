const science = ["phy" , "chem" , "maths"]
const arts =  ["his" , "hindi" , "geo"]

console.log(science.concat(arts));
// concatenates two arrays

const all_subjects = [...science , ...arts]
// all_subjects is an instance of object array which puts the elements of array - science and arts , in it.
console.log(all_subjects);

// the output in both the above cases is same but we still prefer to use the second method because first one is going to have a limitaion that we'd be able to concatenate only two arrays at a specific time.

const array = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [8 , 9 , [10 , 11 , 12]]]
const another_array = array.flat(Infinity)
console.log(another_array);
// flat is a very important method which helps to bring all subArrays inside main array into one array.
// we wrote infinity coz it means the depth upto which we have to subArrays part of main array.

console.log(Array.from("pixie"));
// will make array out of pixie.

console.log(Array.isArray("pixie"));
// returns true or false

console.log(Array.from({name : "pixie"}));
//#interview - it will return an empty string coz we didn't specify if we want an array of key or value , in this key : value pair.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));

// array is an example of non-primitive data type , which has the following above stated methods.







