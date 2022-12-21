'use strict';

//use strict is used when we want to use let,var,const in out code strictly 


//.......................let..................

/*
variable declared with let can be assigned again and again but it is not hoisted and also
cannot be re declared

variable declared with var can be assigned again and again but it is not hoisted and also
can be re declared

variable declared with let can not be re assigned and rec=decalred


//hoisting :  In this process the variable and funtions move top to there scope

*/


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  let >>>>>>>>>>>>>>>>>>>>>>>>>> 


let a ="str";

console.log(a)

//re declare a

a = "str 2"

console.log(a)

// let a = "new"
//throws a error Identifier 'a' has already been declared

console.log(a)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  var >>>>>>>>>>>>>>>>>>>>>>>>>>


var b ="str";

console.log(b)

//re assign b
b= "str 2"

console.log(b)

//re declare

var b = "str 5"

console.log(b)


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  const >>>>>>>>>>>>>>>>>>>>>>>>>>


const c ="str";

console.log(c)
