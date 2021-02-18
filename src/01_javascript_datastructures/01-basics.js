const assert = require('assert').strict;
/**

JavaScript is a loosely typed and dynamic language, but it still has types under the hood.

There are six Data Types that are primitives, checked by typeof operator

undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"

We can use the nodejs assert.equal function to check these primitive types.

*/


assert.equal(typeof undefined, 'undefined');
assert.equal(typeof true, 'boolean');
assert.equal(typeof 10, 'number');
assert.equal(typeof 'hello', 'string');
assert.equal(typeof 10n, 'bigint');
assert.equal(typeof Symbol('MySymbol'), 'symbol');


// null is the odd one out. Guess what type null is below. 

// assert.equal(typeof null, '');


/*
Apart from the primitives Javascript supports structural types. 
the type Object is the root type for these structural types. 

Read more about prototypal inheritance here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

In JavaScript, objects can be seen as a collection of properties. 
With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. 
Property values can be values of any type, including other objects, which enables building complex data structures. 
Properties are identified using key values. A key value is either a String or a Symbol value.
*/
assert.equal(typeof {}, 'object');
assert.equal(typeof [], 'object');

/*
By using *.constructor.name we can get morespecific information about a type.
*/

assert.equal([].constructor.name, 'Array');

// Here we have a class. Guess the name of the type
class Animal {}
var dog = new Animal();

assert.equal(dog.constructor.name, '');
assert.equal(typeof dog, 'object');

