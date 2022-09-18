const assert = require('assert').strict;
/*
Arrays and Sets and other standard javascript objects now implement the iterable protocol. 
This gives support for syntactic sugar such as array spreads [...array] and for...of loops.
This https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols MDN 
article explains it better than I could.

Here we will add the iterable protocol to our class so that it will really behave like a native array.
*/

class TweetArray {
    // The old twitter char limit of 140
    static CHAR_LIMIT = 140;

    // size is the max number of tweets we can store. 
    constructor(size) {
        this.maxLength = size;
        // This is our buffer datastore
        this.store = Buffer.alloc(this.maxLength * TweetArray.CHAR_LIMIT, ' ');
        this.length = 0;
    }
    push(tweet) {
        if (this.length === this.maxLength) {
            throw new Error('Max number of tweets reached.')
        }
        if (tweet.length > TweetArray.CHAR_LIMIT) {
            throw new Error('Tweet is too long')
        }
        let offset = this.length * TweetArray.CHAR_LIMIT;
        for (let i = 0; i < tweet.length; i++) {
            this.store.writeUInt8(tweet.charCodeAt(i), offset);
            offset++;
        }
        this.length++;
    }
    get(index) {
        const offset = TweetArray.CHAR_LIMIT * index;
        return this.store.toString('ASCII', offset, offset + TweetArray.CHAR_LIMIT).trim();
    }
    filter(fn) {
        const result = new TweetArray(this.length)
        for (let i = 0; i < this.length; i++) {
            const el = this.get(i)
            if (fn(el, i)) {
                result.push(el);
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
    join(str) {
        let returnString = '';
        this.forEach((tweet) => {
            returnString += tweet + str;
        })
        return returnString.slice(0, -1 * str.length);
    }
}
const tweetArr = new TweetArray(1000);
tweetArr.push('a');
tweetArr.push('b');

// TASK: implement the iterable protocol on the TweetArray class so that the assertions below will pass

assert.equal([...tweetArr][0], 'a');
assert.equal([...tweetArr][1], 'b');
assert.equal(tweetArr[Symbol.iterator]().next().value, 'a');

console.log('Well done! You completed this exercise.');