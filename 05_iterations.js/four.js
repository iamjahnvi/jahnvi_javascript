const myObject = {
    'js' : "javascript" ,  
    'cpp' : "C++" ,
    'rb' : "ruby" ,
    'swift' : "swift by apple"
    // we can also write keys without enclosing them in single quotes.
}

// now in the previous file-three.js , we noticed that we cannot run for-of loop on objects , it showed the similar error which is "myObject is not iterable" , but the fact is we have to implement loops on objects anyway , so we introduced "for-in loop".

// for-in implemented on object :-
for(const key in myObject){
    console.log(`${key} stands for ${myObject[key]}`); 
}

// for-in loop implemented on array :-
console.log("Names i belong to :-")
const array1 = ["pixie" , "champ" , "cutie" , "hustler"]
for(const names in array1){
    console.log(`${array1[names]}`)
}

// for-of loop implemented on array :-
console.log("Names i belong to :-")
const array2 = ["pixie" , "champ" , "cutie" , "hustler"]
for(const names of array2){
    console.log(names)
}

//#interview - the major thing you have to notice here is that , while printing an array using for-in loop we have to write names as indexes inside array-name , but when we have to print the same array using for-of loop, the names weren't treated as indexes but themselves as elements.

const map = new Map()
map.set('IN'  ,  "India")
map.set('USA' , "United staes of america")
map.set('UK'  ,   "United America")
map.set('Fr' ,  "France")
map.set('Fr' ,  "France")

// console.log(map)
for(const key in map){
    console.log(key)
}

// printing map using for-in loop , doesn't show anything , because map is non iterable.







