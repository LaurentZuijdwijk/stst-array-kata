const assert = require('assert').strict;
/**
The first of the types we are going to look at.
Hashmaps are efficient key value stores.
They are cheap to lookup values and fairly cheap to add values 

Javascript has Object, Map and WeakMap as hashmap implementations. 

Hashmaps differ from arrays in that arrays have keys as integers and for a hashmap it 
can be either a string, number or a Symbol.

*/

const map = new Map();
map.set('myKey', 'MyValue');
const value = map.get('myKey');

assert.equal(value, 'MyValue');

const obj = {};
obj['myKey'] = 'MyValue';

assert.equal(obj['myKey'], 'MyValue');

/*

A hashmap stores data in memory and identifies the position using a hashing function on the key. 
In Javascript we do not have direct memory access/management, but when we use a low level language
we need to reference data by its exact position. 
*/

class NaiveHashmap {
    constructor() {
        this.internalDataStore = [];

    }
    set(key, value){
        const position = this.hash(key);
        this.internalDataStore[position] = value;
    }
    get(key){
        const position = this.hash(key);
        return this.internalDataStore[position];
    }

    hash(key){
        // hashing function converts our key to an integer value;
        let hashed = 1
        for (let i = 0; i < key.length; i++) {
            hashed += key.charCodeAt(i);
        }
        return hashed;
    }
}

const myHashMap = new NaiveHashmap();

myHashMap.set('bird', 'Tweetie')
assert.equal(myHashMap.get('bird'), 'Tweetie')

/* 
    We see in this naive implementation that we can store data and retrieve it. 
    Lookup cost is O(1), perfect.

    We did not handle any potential clashes we might have in our hashing function.
*/
