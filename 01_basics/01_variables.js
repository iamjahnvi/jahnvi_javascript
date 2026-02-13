const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity= "Jaipur"
let accountState ;

// accountId = 2;  // not allowed
accountEmail = "abc@gmail.com";
accountPassword = "212121";
accountCity = "Delhi";

console.log(accountPassword);
console.log(accountCity);
console.log(accountEmail);
console.log(accountId);

/*
prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);