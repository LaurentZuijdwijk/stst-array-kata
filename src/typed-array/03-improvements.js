/*
As we saw, there were some problems with our TweetArray class. 
It didn't respect max string length or max number of tweets.

Here we are going to try to improve those issues.

Think about what happens when we try to store more data than is available in our buffer. 

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
        if(this.length >= this.maxLength) throw new Error('Maximum number of tweets reached');
        let offset = this.length * TweetArray.CHAR_LIMIT;
        // if(tweet.length > TweetArray.CHAR_LIMIT) throw new Error('Tweet length is limited to 140 chars');
        for (let i = 0; i < tweet.length; i++) {
            this.store.writeUInt8(tweet.charCodeAt(i), offset);
            offset++;
        }
        this.length++;
    }
    get(index) {
        const offset = TweetArray.CHAR_LIMIT * index;
        return this.store.toString('ASCII', offset, offset + TweetArray.CHAR_LIMIT);
    }
}

// TASK: Improve the push method above to throw an error when the tweet is too long. The tests below will have to pass.
// TASK: Improve the push method above to throw an error when we reach the max number of items. The tests below will have to pass.
// TASK: Tweets are also returned with too many characters. This must be fixed in the get() function.
const tweetArr = new TweetArray(3);

tweetArr.push('First tweet')

const tracker = new assert.CallTracker();
const equal = tracker.calls(assert.equal, 4);

try {
    tweetArr.push('Long tweet, too long and too many characters to fit in the official character limit. Should a tweet which is too long be truncated or should our class throw an error?');
}
catch (error){
    equal(error.message, 'Tweet length is limited to 140 chars');
}



tweetArr.push('Second tweet')

console.log('1', tweetArr.get(1))
console.log('2', tweetArr.get(2))

// tweetArr.push('Third tweet')
// try{
//     // tweetArr.push('fourth tweet')
// } catch(error){
//     equal(error.message, 'Maximum number of tweets reached')
// }
// equal(tweetArr.get(1), 'Second tweet')
// equal(tweetArr.get(2), 'Third tweet')
process.on('exit', () => {
//   tracker.verify();
});

