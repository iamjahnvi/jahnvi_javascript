const numList = [1 , 2 , 3]

const myTotal = numList.reduce(function (acc , currVal) {
    console.log(`acc : ${acc} and currVal : ${currVal}`)
    return acc + currVal
} , 0)

console.log(myTotal);

// acc stands for accumulator or the starting point from where we are going to start our value from, whose value we inputted as 0 after the closing of local scope.
// currVal stands for current Value 
// currVal keeps on updating , in this example it is acc + currVal

// ONE-LINER (as arrow function)
const sumTotal = numList.reduce((acc , curr) => acc+curr , 0)
console.log(sumTotal)


const shoppingCart = [
    {
        itemName : "js course" ,
        price : 199
    } , 
    {
        itemName : "python course" ,
        price : 699
    } ,
    {
        itemName : "ai/ml course" ,
        price : 999
    } ,
    {
        itemName : "dsa course" ,
        price : 299
    }
]

const priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price , 0 )

console.log(priceToPay);

