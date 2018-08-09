var Twitter = require('twitter');
require("dotenv").config();

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var twitter = {
    getTweets: function(handle, cb) {
        client.get('statuses/user_timeline',{ screen_name: handle, limit: '1'} , function(error, tweets, response) {
        if (!error){
            cb(tweets);      
        } else {
            // console.log(error);
            throw error;
        }
        });
    }
}

module.exports = twitter;


