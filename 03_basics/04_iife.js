// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB Connected`);
}
chai() ;
// here function will get immediately voked to print the console statement , but the problem with this is that it gets polluted becuase of global function.

// NAMED IIFE
(function chai(){
    console.log(`DB Connected`);
})() ;

// first parenthesis is where we are going to write the defination of function.
// second parenthesis is put for execution purpose.

//#interview - we introduced not only because we wanted function to get immediately invoked in the system but also because we want to prevent our block of code from the pollution due to declaration of global variables.


// SIMPLE IIFE
(
    (name) => {
        console.log(`MY NAME IS ${name}`);
    }
)('pixie') ;

// first parenthesis - for packaging function in a block.
// second parenthesis [ () => ]- to make arrow function.
// pixie is the argument we passed we passed in the execution parenthesis
// name is the parameter

//#interview - also super important point to be remembered in case of IIFE is that , we have to compulsorily put semi-colon at the end of IIFE to tell the IIFE block of code that it is ending here.












































