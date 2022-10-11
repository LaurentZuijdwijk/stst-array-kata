const assert = require('assert').strict

/*

An array is an iterable object where data is stored in numbered indices. 
Arrays are fast to store and retrieve data and are universally used.
The javascript standard lib array has plenty of functional methods to sort, filter and search data.

In javascript we do not have to specify the length or memory requirements or data type of our arrays. 
The language does everything for us, unlike in other languages we can store whatever we want in our arrays. 

This first exercise is a warm up. 

*/

// TASK 1: retrieve all numbers from this array using .filter  
const array1 = ['a', 'b', 1, 2]

const numbers = array1 /// ADD YOU CODE HERE

assert.equal(numbers[0], 1)
assert.equal(numbers[1], 2)
assert.equal(numbers.length, 2)

// TASK 2: convert all strings in thh array below to uppercase
const animals = ['cat', 'dog', 'horse']

const uppercase = animals // ADD YOUR CODE HERE

assert.equal(uppercase.length, 3)
assert.equal(uppercase[0], 'CAT')

console.log('\x1b[1m\x1b[36mWell done! You completed this exercise.\x1b[0m')