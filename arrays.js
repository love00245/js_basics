//<<<<<<<<<<<<<<<<<<< Arrays>>>>>>>>>>>>>>>>>>>>>>>>

/*
In any arrays are one of the most important language. 
Working with arrays is a bit complicated as they are most vulnerable dataType
We can store multiple data types in arrays with ease.
*/

let arr = [1, 2, 34, 45];

//accessing array elements 

//indexing in array starts from 0 to arr.length
console.log(arr[0])


//storing multiple dataTypes
arr = [
    "string",    //strings
    ['1', 2, 4], //array inside array
    {},          //object 
    1,           //number
    1.1,         //float
    true         //boolean
]


//array methods


/*
1. arr.length               getting length of array
2. arr.indexOf()            getting index of a specific values
3. arr.slice()              slicing elements from array
4. arr.splice()             slicing elements from array
5. arr.join()               joing array elements
6. arr.lastIndexOf          getting last element 
7. arr.push()               adding elements to an array (at last)
8. arr.shift()              adding elements to an array (at begining)
9. arr.pop()                removing elements from an array (from last)
10. arr.unshift()           removing elements from an array (from begining)
11. arr.concat(arr 2nd)     adding two arrays
12. arr.toString()          converting array to string
13. arr.reduce()            reducing array elements to 1 element depeing upon condition 
14. arr.filter()            filtering out elements based on a condition
15. arr.some()              getting true or false if some of array elementa match a condition
16. arr.every()             getting true if all matches the condition else false
17. arr.map()               looping over a array and getiing a new array based on a condition
18. arr.forEach()           another method to loop over array but doesnot returns a new array
19. arr.flat()              used to flatten the 2d or 3d arrays
20. arr.flatMap()           used to flatten the array but can be only used if the array is 2d only
21. includes()              used to check if the array contains that specified element 
*/