// In JavaScript, almost "everything" is an object.
/*

Objects are just like arrays but the difference is that the object has key value 
pairs not like arrays object works with key value pair  every key is uniques holds
a value which can be of any dataType or it can be function also object plays a great
role in data handling
*/

//Object can store any data type
let object_ = {
    numbers: 12345,
    strings: "heyyy",
    Booleans: true,  // or false
    functions: () => {

    },
    nulls: null,
    undefineds: undefined,
    arrays: []
}
// Properties can usually be changed, added, and deleted, but some are read only.

//lets create a new Object and see different ways to create an Object


// let obj = new Object();      //first method to create object
// let obj1 = {};               //second method to create obj1


// //we can also create object by making funtions 

// function createObj(name,phoneNo,city){
//     this.name = name;
//     this.phoneNo =phoneNo;
//     this.city = city;
// }

// // here by calling funtion using new keyword we pass arguments to the object and it creates new obj for us!

// let obj2 = new createObj('love','1234','CHandigarh')


// console.log(obj2)

// obj.love = 'preet'

// console.log(obj)

// suppose we want a new object with all the porperties of other object here Object.assign works


// let obj = {
//     name :"love"
// }
// let obj2 ={
//     class :"btech"
// }

// let obj3 = Object.assign(obj ,obj2) //fourth method to not like create object but to join two objects

// console.log(obj3)   //output := { name: 'love', class: 'btech' }



// Lets see how to access the object elements


let object = {
    name: "love",
    class: "High"
}

//ojectName.keyName

// console.log(object.name)


// Basic question comes in mind if there are key value pair how to loop over  :=   for in loop

//simple presentation how to loop over object
for (let key in object) {
    console.log(key)
}


// to get all the keys in any object
let obj = Object.keys(object)

console.log(obj)
//to get all the values in any object

let obj2 = Object.values(object)
console.log(obj2)

