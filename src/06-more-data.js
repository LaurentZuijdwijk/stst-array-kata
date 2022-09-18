const assert = require('assert').strict;
/*

We now have this array with strings of 140 characters. What if we would like to add some more data?
Would it be possible to add ids to our data structure? How would we do that?

Twitter ids are made up of 64 bit integers. They are generated based on timestamp, worker-id and sequence number.

Javascript Numbers do not support 64 bit numbers, but fortunately the new-ish BigInt does.

We will have to modify our code a bit to support our new ids. 
- We will have to increase the space in our buffer with 64 bits per row.
- Create a function to generate ids
- modify the push function to write the id and tweet separately.
- modify the get function to read the id and tweet separately

*/

class TweetArray {
    // The old twitter char limit of 140
    static CHAR_LIMIT = 140;

    // size is the max number of tweets we can store. 
    constructor(size) {
        this.maxLength = size;
        // This is our buffer datastore
        this.store = Buffer.alloc(this.maxLength * (TweetArray.CHAR_LIMIT), ' ');
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
        return this.store.toString('binary', offset+8, offset + TweetArray.CHAR_LIMIT).trim();
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
    *[Symbol.iterator]() {
        for (let i = 0; i < this.length; i++) {
            yield this.get(i);
        }
        return this;
    }
    save(filename){
        const fs= require('fs');
        fs.writeFileSync('filename', this.store);
    }
}

const tweetArr = new TweetArray(2);
tweetArr.push('My first tweet');
tweetArr.push('My second tweet');

assert.equal(tweetArr.length, 2);
assert.equal(tweetArr.get(0).length, 2);

assert.equal([...tweetArr][0][0], 1n);
assert.equal([...tweetArr][1][0], 2n);
assert.equal([...tweetArr][0][1], 'My first tweet');
assert.equal([...tweetArr][1][1], 'My second tweet');

console.log('Well done! You completed this exercise.');