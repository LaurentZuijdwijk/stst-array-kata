
/*
We are going to create a typed array using a buffer in NodeJS. The resulting code will feel like a lower level language!

In C, C++, Rust and other typed low level languages we need to define exactly what an array should look like. Data types 
and sometimes the length has to be defined so that the right amount of memory can be reserved. 
Life in JS land is so much simpler, we can put whatever data we want in an array until we run out of physical memory. 


In these exercises we are going to create a fixed size array to store tweets in a buffer and learn about various new javascript API's along the way. 

Our approach will be to create an array like class, which uses an underlying datastorage which isn't a JS array. 
We will create a fixed sized buffer to store N number of tweets with a fixed length as specified in the constructor. In our MVP we will have a constructor,
a push and a get function. Later we will add more functionality. 

A buffer is a bit like an array, it is a fixed-lenght sequence of bytes that we can use to store data in. It extends Uint8Array, which is an array that 
can hold an ASCII character per position.

We store the data directly in memory, using a buffer. The data design is kept simple instead of highly optimised.

The storage space will have the following design:
- fixed size memory
- fixed memory allocation per tweet based on the maximum number of characters in a tweet (140 in out case)
- fixed maximum number of tweets

We can define the buffer size we need as follows:
BUFFER size = number of tweets * tweet size

To read tweets we can calculate the offset using 
offset = index * TWEET_SIZE.

Example data layout:
------------------------------------------------------------------------
|just setting up my twttr                                              | 
|It's a new day in America.                                            | 
|                                                                      |
|                                                                      | 
|                                                                      |
|                                                                      |  
|                                                                      |  
|                                                                      | 
-----------------------------------------------------------------------  

Reading: https://nodejs.org/api/buffer.html

Requirements: node.js version 14

*/

const assert = require('assert').strict;


class TweetArray {
    // The old twitter char limit of 140
    static CHAR_LIMIT = 140;

    // size is the max number of tweets we can store. 
    constructor(size) {
        // This is our buffer datastore
        this.maxlength = size;
        this.store = Buffer.alloc(this.maxlength * TweetArray.CHAR_LIMIT, ' ');
        this.length = 0;
    }
    push(tweet) {
        let offset = this.length * TweetArray.CHAR_LIMIT;
        for (let i = 0; i < tweet.length; i++) {
            this.store.writeUInt8(tweet.charCodeAt(i), offset);
            offset++;
        }
        this.length++;
    }
    get(index) {
        const offset = TweetArray.CHAR_LIMIT * index
        return this.store.toString('binary', offset, offset + TweetArray.CHAR_LIMIT);
    }
}

let tweetArrayInstance;

// Question 1: What happens if we use a tweet lenght bigger than 140 (static CHAR_LIMIT = 140) characters?
// Question 2: What happens if we add more tweets than we defined in the size parameter?
// Question 3: Why do we only support strings in this TweetArray class? What would happen if we try to store numbers?

// Task: Use the tweet array implementation to add 5 tweets. 
// Task: First tweet should be "just setting up my twttr", the first tweet ever tweeted. 
// Task: In the `get`` method we need to add a string function to retrieve the right string length.


// ADD CODE HERE
assert.equal(tweetArrayInstance.length, 5);
assert.equal(tweetArrayInstance.get(0).trim(), "just setting up my twttr");
