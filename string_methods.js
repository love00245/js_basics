
'use strict';
// Strings are also the most imortat data type to work with


//lets discuss some string methods commonly used

/*
1.chatAt()           //returns charater at specific index
2.match()        //match given string in the string
3.concat()
4.includes()
5.endswith()     //to check the str ends with a speciic charater
6.length()       //to retrive the length of the array 
7.trim() 
8.replace()      //use to replace the character from the string
9.split()        //use to split the string depending how you want to split
10.startsWith()  //to check if string starts with specific charater
11.substring()   //to get the substring from a string
12.toLowerCase() //to convert the string to lower case
14.toUpperCase() //toUpperCase
*/


let str ='hello'

//chatAT method is used to get charater at a specific index

// console.log(str.charAt(0))
// console.log(str.charAt(1))
// console.log(str.charAt(2))
// console.log(str.charAt(3))
// console.log(str.charAt(4))
// console.log(str.charAt(5))


//in strings also index works from 0 


//.length method is to get length of the string

console.log(str.length)

//match  as name states that it is used to match a pattern in a string

console.log(str.match(/ello/g))


//concat method is used to concatinate two strings

let str2 = 'bro!'

console.log(str.concat(" ",str2))


//includes method is also used to check if some str have the provided value

console.log(str.includes('ello'))

// it returns boolean value 

