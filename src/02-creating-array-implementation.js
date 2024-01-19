const assert = require('assert').strict;
/*
We are going to create a typed array using a buffer in NodeJS. The resulting code will feel like a lower level language!

In C, C++, Rust and other typed low level languages we need to define exactly what an array should look like. Data types 
and sometimes the length has to be defined so that the right amount of memory can be reserved. 
Life in JS land is so much simpler, we can put whatever data we want in an array until we run out of physical memory. 

In these exercises we are going to create a fixed size array to store tweets in a buffer and learn about various new javascript API's along the way. 

Our approach will be to create an array like class, which uses an underlying data storage which isn't a JS array. 
We will create a fixed sized buffer to store N number of tweets with a fixed length as specified in the constructor. In our MVP we will have a constructor,
a push and a get function. Later we will add more functionality. 

A buffer is a bit like an array, it is a fixed-length sequence of bytes that we can use to store data in. It extends Uint8Array, which is an array that 
can hold an ASCII character per position.

We store the data directly in memory, using a buffer. The data design is kept simple instead of highly optimized.

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

*/

class TweetArray {
    // The old twitter char limit of 140
    static CHAR_LIMIT = 140;

    // size is the max number of tweets we can store. 
    constructor(size) {
        // This is our buffer datastore
        this.maxLength = size;
        this.store = Buffer.alloc(this.maxLength * TweetArray.CHAR_LIMIT, ' ');
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


// Task 1: Use the tweet array implementation to add 5 tweets. The first tweet should be "just setting up my twttr", the first tweet ever tweeted. 

// Question 1: What happens if we use a tweet length bigger than 140 (static CHAR_LIMIT = 140) characters, try it out?
// Question 2: What happens if we add more tweets than we defined in the size parameter?
// Question 3: Why do we only support strings in this TweetArray class? What would happen if we try to store numbers?

// ADD CODE HERE
let tweetArrayInstance;

assert.equal(tweetArrayInstance.length, 5)
assert.equal(tweetArrayInstance.get(0).trim(), "just setting up my twttr")

console.log('\x1b[1m\x1b[36mWell done, you completed task 1.\x1b[0m')

// Task 2: In the `get`` method we need to add a string function to retrieve the right string length, without excess whitespace. 

// ADD CODE HERE

console.assert(tweetArrayInstance.get(0), "just setting up my twttr")

console.log('\x1b[1m\x1b[36mWell done! You completed exercise 2.\x1b[0m')
