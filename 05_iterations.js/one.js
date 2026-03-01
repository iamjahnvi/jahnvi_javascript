// for loop

let array = [1 , 2 , 3 , 4 , 5 , 6 , 7]
for(let a = 0 ; a < array.length ; a++){
    const element = array[a]
    if(element == 2){
       // console.log(`${element} is the smallest prime number`)
    }
}

for(let i = 2 ; i <= 10 ; i++){
    // console.log(`MULTIPLICATION TABLE OF ${i}`)
    for(let j = 1 ; j <= 10 ; j++){
        const pro = i * j
       // console.log(`${i} X ${j} = ${pro}`)
    }
}

let myArray = ["eng" , "hindi" , "maths" , "sci" , "ssc"]

for(let k = 0 ; k < myArray.length ; k++){
    // console.log(myArray[i]);
}

// break and continue
for(let l = 0 ; l <= 20 ; l++){
    console.log(l)
    if(l==5){
        console.log(`${l} is detected`)
        break
    }
}













