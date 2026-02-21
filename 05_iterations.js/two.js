let index = 0 
console.log(`List of even numbers : `)
while(index <= 10){
    if(index%2==0){
        console.log(`${index}`)
    }
    index++
}

console.log(`List of elements inside array : `)
let myArray = [10 , 12 , 14 , 16 , 18]
let i = 0
while(i <= myArray.length){
    console.log(`${myArray[i]}`)
    i++
}

// do while loop
console.log(`MULTIPLICATION TABLE OF 4`)
let num = 4
let j = 1
do{
    console.log(`${num} X ${j} = ${num*j}`)
    j++
}while(j<=10)






