// ways of defining objects (again!)

// 1st way
// const tinderUser = new Object();
// console.log(tinderUser);  // {} 

// 2nd way
const tinderUser = {} 

tinderUser.name = "Sam"
tinderUser.id = "abc123"
tinderUser.email = "xyz@gmail.com"
tinderUser.age = 24
tinderUser.isLoggedIn = true
tinderUser.gotRightSwipped = false

// console.log(tinderUser);

const regularUser = {
    email : "ilysm@gmail.com" , 
    fullName : {
        userFullName :  {          // object inside object 
            fisrtName : "jahnvi" , 
            lastName : "dwivedi"
        }
    }
}
console.log(regularUser.fullName.userFullName.fisrtName);


// BIG FAT EXAMPLE OF OBJECT INSIDE OBJECT

const student = {
    delina : {
        fullName : {
            firstName : "Delina" , 
            lastName : "Roy"
        } ,
        age : 19 ,
        education : {
            primary : "NVM" , 
            secondary : "DAV" ,
            seniorSecondary : "DPS"
        } , 
        gender : "female" , 
        marks : {
            Marks10 : {
                hindi : 99 , 
                english : 96 , 
                maths : 98 , 
                science : 100 ,
                ssc : 97
            } , 
            Marks12 : {
                phy : 95 ,
                chem : 96 ,
                maths : 99 ,
                cs : 100 ,
                english : 99
            }
        } ,
        jeeMain : {
            Attempt1 : {
                score : 200
            } ,
            Attempt2 : {
                score : 275
            }
        }
    } , 
    ira : {
        fullName : {
            firstName : "Ira" , 
            lastName : "Basu"
        } ,
        age : 20 ,
        education : {
            primary : "NVM" , 
            secondary : "DAV" ,
            seniorSecondary : "DPS"
        } , 
        gender : "female" , 
        marks : {
            Marks10 : {
                hindi : 99 , 
                english : 100 , 
                maths : 98 , 
                science : 100 ,
                ssc : 97
            } , 
            Marks12 : {
                phy : 95 ,
                chem : 100 ,
                maths : 99 ,
                cs : 100 ,
                english : 100
            }
        } ,
        jeeMain : {
            Attempt1 : {
                score : 100
            } ,
            Attempt2 : {
                score : 240
            }
        }
    }
}

// way of accessing object inside object :-
console.log(`NAME : ${student.delina.fullName.firstName}`);
console.log(`AGE : ${student.delina.age}`);
console.log(`GENDER : ${student.delina.gender}`);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

// 1st WAY : -
// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3);

// 2nd WAY :-
// const obj3 = Object.assign( {} , obj1 , obj2)
// generally this way of writing is more prefered as "{}" as target and obj1 , obj2 as source.(read assign doc mdn)

// 3rd WAY :-
// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1 , 
        email : "xyz@gmail.com"
    } ,
    {
        id : 2 , 
        email : "abc@gmail.com"
    } ,
    {
        id : 3 , 
        email : "efg@gmail.com"
    } ,
    {
        id : 1 , 
        email : "ijk@gmail.com"
    } ,
    {
        id : 1 , 
        email : "opq@gmail.com"
    }
]

// remember : the bracket enclosing the last object key-value pair is a sqaure bracket.
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// stored in an array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
































// #interview :-
// QUESTION - if output of the two console statements is same , then what is difference?
// ANSWER - 1st way is a singleton object and 2nd way is not a singleton object.

