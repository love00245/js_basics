// //<<<<<<<<<<<<<<<<<<< som array methods in details >>>>>>>>>>>>>>>>>>>>>>>>>>>>


// //forEach array.forEach(function(currentValue, index, arr) arr conating all values

// let array = [1,2,3,4, 5, 6, 7, 8, 9]

// let newArr = [];
// array.forEach(element => {
//     newArr.push(element * 2); 
// });


// // console.log(newArr);

// //map

// let new_array = array.map((ele) => {
//     return (ele * ele);
// });

// // console.log(new_array);


// //filter method

// let filtered_array = newArr.filter((ele) => {
//     return ele > 5
// })



// // console.log(filtered_array)

// //some method  returns true is any of element satisfys the condition

// if (array.some((ele) => ele < 0)) {
//     // console.log(`Yes there a element less than ${2}`)
// }


// //every method return true only if all the elemenst satisfy the condition

// let n = 0;
// let biggerElement;
// // console.log(array.every((ele) => ele%2 ==0 ))

// let sq =[2,4,6,8]
// // console.log(sq.every((ele) => ele%2 ==0 ))



// //push methods is used to add element to the last of an array

// let arrayPush= [112,114,12,3];

// arrayPush.push(1);
// // console.log(arrayPush);

// //pop methods is used to remove element from the last of an array

// let arrayPop= [112,114,12,3];

// arrayPop.pop()
// // console.log(arrayPop);



// //shift methods is used to add element to the first of an array

// let arrayShift= [112,114,12,3];

// arrayPush.push(1);
// // console.log(arrayPush);



// //unshift method is used to remove element from the start of the array

// let arrayUnshift = [1,2,3,4,4,5];

// arrayUnshift.unshift(20)

// // console.log(arrayUnshift);


// Concat method is used to make two or more array
// let arr = [1,2,3]
// let arr2 =[4,5,6]
// // let arr3 =[4,5,6]


// // both can be used to concat multiple arrays


// console.log(arr.concat(arr2,arr3))

// console.log(arr.concat(arr2).concat(arr3))


//toString method is used to convert array elements to string


// let arr = [1,2,3,4]
// let arrString = arr.toString()

// //lets check type of converted array that is arrString

// console.log(typeof(arrString))

//here is the out put 
// console.log(arr.toString())


//reduce method is also very imp method used to reduce array value to one single value

// let arr = [12, 3, 4, 5, 6, 7]
// let arr1 = [12, 3, 4, 5, 6 ]


// total is defined as 0 intiial value
//current refers to the current value
//i can be provided refers to the index 
// //arr also provide array 

// let sum = arr.reduce((total ,curr,i,arr) =>total += curr ,0)

// console.log(sum)


// flat method in js is also important method to deal with 2d arrays

let arr = [1,2,4 , [4,4 ],7,8];

//above array is in 2d foramt  [[]]

//to loop or to work on this array we have to make it simpler

let flattenedArray =arr.flat()

console.log(flattenedArray)


//another important method is flatMap

let newMapedArray = arr.map((ele)=> ele <5)

// console it and you will get 6 outputs which means that
// the map considered the inside array as whole 
// console.log(newMapedArray);


//to resolve this problem we can use flatMap

// let newFlatMap =arr.flatMap((ele)=> ele<5)

// //here it flattened the array first and then looped over
// console.log(newFlatMap);



//includes methods is also very important method 


let arrI = [1,2,3,4,5,6];


console.log(arrI.includes(1))

