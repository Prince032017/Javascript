const id = 12;
let city = "Noida";
var country = "india";
accountType = "Public";

// id =2;  not allowed

city = "Meerut";
accountType="Private";
country = "India";
/*
    Prefer not to use var because of block scope issue. Always prefer to use let and const to declare your variable.
    let and const are introduced in ES6 version of JS, before that JS has only two scope global and functional scope. 
    But now JS has three scope global, functional and block scope.
*/

console.table([id, city, country, accountType]);