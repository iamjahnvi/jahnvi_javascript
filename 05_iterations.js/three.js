// HIGH

// ["" , "" , ""]     strings inside array
// [{} , {} , {}]     objects inside array

// BASIC SYNTAX OF for-of LOOP

// for(const iterator of object){

// }

// do not confuse this object with the object that we study in js. Here object means the object on which we are running loop.

const subjects = ["english" , "hindi" , "maths" , "science" , "ssc"]
for(const sub of subjects){
    // console.log(sub)
}

const greetings = "Hello World!"
for(const greet of greetings){
    if(greet == " "){
        continue
    }
    // used continue keyword because i didn't want to print space , while printing all the chars.
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN' ,  "India")
map.set('USA' , "United staes of america")
map.set('UK',   "United Kingdom")
map.set('Fr' ,  "France")
map.set('Fr' ,  "France")

// console.log(map)

// output :-
// Map(4) {
//   'IN' => 'India',
//   'USA' => 'United states of america',
//   'UK' => 'United Kingdom',
//   'Fr' => 'France'
// }

// map only prints unique set of key-value pair.

for(const key of map){
    console.log(key)
}

// [ 'IN', 'India' ]
// [ 'USA', 'United states of america' ]
// [ 'UK', 'United Kingdom' ]
// [ 'Fr', 'France' ]

for (const [key , value] of map){
    console.log(key ,' :-' , value)
}

// IN  :- India
// USA  :- United staes of america     
// UK  :- United America
// Fr  :- France

// const myObject = {
//     'game1' : 'pubg' ,
//     'game2' : 'candy crush'
// }
// for(const [key , value] of myObject){
//     console.log(key ,' :-' , value)
// }
// TypeError: myObject is not iterable

// this is the error which will show up when we will print an object(as datatype) using for-of loops.

const myObject = {
    game1 : 'pubg' ,
    game2 : 'candy crush'
}
for(const [key , value] of myObject){
    console.log(key ,' :-' , value)
}

// TypeError: myObject is not iterable
// this will show the same error.














