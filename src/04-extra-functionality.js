/*

So we have a fairly well working basic array class to store tweets, but 
it is still a bit limited in functionality. It would be great if we were able to filter
and traverse all the tweets in our array easily. At the end of this exercise our class will 
look a bit more like a native array!

There will still be some things missing, but we will do those in the next exercise.
*/

const assert = require('assert').strict;


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
}

//
// TASK: write a .forEach function in the class above 
//

const tweetArr = new TweetArray(4);

tweetArr.push('First tweet')
tweetArr.push('Second tweet')
tweetArr.push('Third tweet')
tweetArr.push('fourth tweet')

let tweets = [];
tweetArr.forEach(tweet => tweets.push(tweet))

assert.equal(tweets.join(', '), 'First tweet, Second tweet, Third tweet, fourth tweet')

// TASK: Write a join method that works the same as JS array.join()

const joined = tweetArr.join(', ');
assert.equal(joined, 'First tweet, Second tweet, Third tweet, fourth tweet')

// TASK: Write a .filter function to make the tests below pass;

const filtered = tweetArr.filter(el => el.includes('Third'));

assert.equal(filtered.constructor.name, 'TweetArray')
assert.equal(filtered.length, 1)
assert.equal(filtered.get(0), 'Third tweet')

console.log('Well done!')