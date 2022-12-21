// What is funtion??

/*
In simple words function is a piece of code which is used so that we would not have to write that piece of code again anda again
in our project
*/

// A JavaScript function is a block of code designed to perform a particular task

/*
Types :=>
1. Function Declaration: Function Declaration is the traditional way to define a function.
   It is somehow similar to the way we define a function in other programming languages. 
   We start declaring using the keyword “function”.
   Then we write the function name and then parameters.
2. Function Expression or anonymus funtion : Function Expression is another way to define a function in JavaScript.
   Here we define a function using a variable and store the returned value in that variable.
3. Arrow Functions: Arrow functions are been introduced in the ES6 version of JavaScript.
   It is used to shorten the code.
   Here we do not use the “function” keyword and use the arrow symbol../new introduced in Es6 (Ecma Script 6) 
   */


//function declration
function sum(a, b) {    //when function is defined the parameters are created that what will the funtion take as parameter
    return a + b
}

//funtion expression
let sum = function (a, b) {
    return a + b
}


//arrow funtions

let sum1 = (a, b) => a+b;   // IMPLICIT RETURN 


sum(1,2) // here 1,2 are arguments

