/**
 
An array is an iterable object where data is stored by numbered indices. 
Arrays are fast to store and retrieve data and are widely used. 
The javascript standard lib array has plenty of functional methods to sort, filter, search etc

In javascript we do not have to specify the memory requirements or data type of our arrays! 
The language does everything for us. 
*/

const assert = require('assert').strict;

const arr = [];

arr.push('a');
arr.push('b');

assert.equal(arr[0], 'a');
assert.equal(arr[1], 'b');

arr.unshift('aa');
assert.equal(arr[0], 'aa');

const found = arr
    .map(el => el.toUpperCase())
    .filter((el) => el === 'B')


assert.equal(found[0], 'B');


/*
Set and WeakSet are very much like arrays, but without duplicate values and a different signature.

A set has a size and an array has a length.

*/

const set = new Set();

set.add('cat');
set.add('dog');

assert.equal(set.has('dog'), true);

/*
We could create a typed array using a buffer in NodeJS, this allows us to simulate a lower level language!

Here we create a fixed sized array to store tweets in a buffer. While we could grow the buffer as needed, 
we will create a fixed sized buffer here to store N number of tweets specified in the constructor.

A buffer is a bit like an array, it is a fixed-lenght sequence of bytes. It extends Uint8Array, which is an array that 
can hold an ASCII character per position.

Below in the example we create a minimal viable array implementation to store Tweets. We can push tweets and get them by index.

We store the data directly in memory, using a buffer. The data design is kept simple instead of highly potimised.

The storage space will have the following design:
- fixed size memory
- fixed memory allocation per tweet based on the maximum number of characters
- fixed maximum number of tweets

BUFFER size = tweet number * tweet size

We can then find the read offset for each tweet using INDEX * TWEET_SIZE.

Data layout including some popular tweets.
-------------------------------------------
|just setting up my twttr                 | ISO date 24 chars
|It's a new day in America.               | 1
|                                         |
|                                         | 99999
|                                         |
|                                         |  fieldsize * index
|                                         | 140*0 = 0
|                                         | 140*1 = 140
------------------------------------------  140*2 = 280

------------------------------------------
|003abc010effwfweeff005abcde              |1
|                                         |99999
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
------------------------------------------

BigO notation
O(1)
O(n)

------
|0    |
|5    |
|10   |
------

*/



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
        let offset = this.length * TweetArray.CHAR_LIMIT + 1;
        for (let i = 0; i < tweet.length; i++) {
            this.store.writeInt8(tweet.charCodeAt(i), offset);
            offset++;
        }
        this.length++;
    }
    get(index) {
        const offset = TweetArray.CHAR_LIMIT * index
        return this.store.toString('ASCII', offset, offset + TweetArray.CHAR_LIMIT);
    }
}

// Question 1: Why do we only support strings in this TweetArray class? What would happen if we try to store numbers?

// Question 2: Write code to use the TweetArray.

// Question 3: What would happen if we try to store a longer tweet than 140 character?

// Question 4: The array supports ASCII characters, what would happen if we try to store a UTF8 emoji?

// TASK 1: Implement type checking (for length and type)in the push method and throw an error if the check fails. 

// TASK 2: When we try to store more tweets than we have space for we get an error. Write code to check the maximum number of tweets. 

// TASK 3: We want to store a date for each tweet in ISO format. Write the code to implement this.
const tweets = new TweetArray(100);
tweets.push('just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr just setting up my twttr');
tweets.push(122798798798729739872397);

tweets.push('just setting up my twttr');
tweets.push(`It's a new day in America.`)
tweets.push('Congratulations to the Astronauts that left Earth today. Good choice');
tweets.push(`Hey guys, wanna feel old?\nI'm 40.\nYou're welcome.`)
console.log('Tweet 0:', tweets.get(0))
console.log('Tweet 1:', tweets.get(1))
console.log('Tweet 2:', tweets.get(2))
console.log('Tweet 3:', tweets.get(3))

// how could we optimise this to save space?
// How can we add more information like a date and handle?
// How can we add utf8 support so we can use emojis?
// What happens if we add a tweet longer than 140 characters? How can we prevent this problem?

// How do we need to handle whitespace?

// how can we add functionality to change or update tweets?

// return;

class TweetArray2 {
    // The old twitter char limit of 140
    static CHAR_LIMIT = 140;

    // size is the max number of tweets we can store. 
    constructor(size) {
        this.maxLength = size;
        // This is our buffer datastore
        this.store = Buffer.alloc(this.maxLength * TweetArray.CHAR_LIMIT, ' ');
        this.length = 0;
    }
    update(index, tweet) {
        this.#writeTweet(index, tweet)
    }
    #writeTweet(index, tweet) {
        let offset = index * TweetArray.CHAR_LIMIT + 1;
        for (let i = 0; i < tweet.length; i++) {
            this.store.writeInt8(tweet.charCodeAt(i), offset);
            offset++;
        }
        // for(let i = 0; i < TweetArray.CHAR_LIMIT - tweet.length; i++ ){
        //     this.store.writeInt8(' '.charCodeAt(0), offset);
        //     offset++;
        // }
    }
    add(tweet) {
        if (this.length + 1 === this.maxLength) {
            throw new Error('TweetArray buffer overflow')
        }
        if (tweet.length > TweetArray.CHAR_LIMIT) {
            throw new Error('Tweet is too long')
        }
        this.#writeTweet(this.length, tweet)
        this.length++;
    }
    get(index) {
        const offset = TweetArray.CHAR_LIMIT * index
        return this.store.toString('ASCII', offset, offset + TweetArray.CHAR_LIMIT);
    }
}

const tw2 = new TweetArray2(10);

tw2.add('Hello from Pluto');

console.log(tw2.get(0));
tw2.update(0, 'Hello from Mars');

console.log(tw2.get(0));


/*

Let's implement more array functionality, like foreach and filter.

*/


class TweetArray3 {
    // The old twitter char limit of 140
    static CHAR_LIMIT = 140;

    // size is the max number of tweets we can store. 
    constructor(size) {

        this.maxLength = size;
        // This is our buffer datastore
        this.store = Buffer.alloc(this.maxLength * TweetArray.CHAR_LIMIT, ' ');
        this.length = 0;
    }
    update(index, tweet) {
        this.#writeTweet(index, tweet)
    }
    #writeTweet(index, tweet) {
        let offset = index * TweetArray.CHAR_LIMIT + 1;
        for (let i = 0; i < tweet.length; i++) {
            this.store.writeInt8(tweet.charCodeAt(i), offset);
            offset++;
        }
        // for(let i = 0; i < TweetArray.CHAR_LIMIT - tweet.length; i++ ){
        //     this.store.writeInt8(' '.charCodeAt(0), offset);
        //     offset++;
        // }
    }
    add(tweet) {
        if (this.length + 1 === this.maxLength) {
            throw new Error('TweetArray buffer overflow')
        }
        if (tweet.length > TweetArray.CHAR_LIMIT) {
            throw new Error('Tweet is too long')
        }
        this.#writeTweet(this.length, tweet)
        this.length++;
    }
    get(index) {
        const offset = TweetArray.CHAR_LIMIT * index
        return this.store.toString('ASCII', offset, offset + TweetArray.CHAR_LIMIT).trim();
    }
    filter(fn) {
        const result = new TweetArray3(this.length)
        for (let i = 0; i < this.length; i++) {
            const el = this.get(i)
            if (fn(el, i)) {
                result.add(el);
            }
        }
        return result;
    }
    forEach(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this.get(i), i);
        }
        return this;
    }
    toString() {
        let ret = `TweetArray length: ${this.length} \n[\n`;
        this.forEach(el => ret += `   ${el},\n`)
        ret += ']'
        return ret;
    }
    valueOf() {
        return this.toString();
    }
}

const tw3 = new TweetArray3(10);

tw3.add('Hello from Pluto');
tw3.add('just setting up my twttr');
tw3.add(`It's a new day on Earth.`)
tw3.add('Congratulations to the Astronauts that left Earth today. Good choice');

console.log('filter', tw3.filter(el => el.includes('Earth')))

console.log(tw3.get(0));
tw3.update(0, 'Hello from Mars');

console.log(tw3.get(0));

console.log(tw3)
/*

When we try to console.log the contents of our TweetArray we get garbled binary data instead of a nicely formatted
array representation. Lets write a toString function so we can print the contents



 */