var Twitter = require('twitter');
require("dotenv").config();

// /Users/TJ/GTCBC/project3/FoodTruckFinder/.env
// /Users/TJ/GTCBC/project3/FoodTruckFinder/app/public/js/twitter.js

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



var twitter = {


    getTweets: function(handle) {
        client.get('statuses/user_timeline',{ screen_name: handle} , function(error, tweets, response) {
        if (!error){
            var tweetslen = tweets.length;
            for (i=0; i< 5 || i<tweets.length; i++){
                if (tweets[i]){
                    console.log("\nTweet #" +(i+1));
                    console.log("created at: " + tweets[i].created_at);
                    console.log(tweets[i].text);
                    console.log("\nTweet #" +(i+1));
                    console.log("created at: " + tweets[i].created_at);
                    console.log(tweets[i].text);
                }
            }        
        } else {
            // console.log(error);
            throw error;
        }
        });
    }
}

  

// var twitter = function() {
//     client.get('statuses/user_timeline',{ screen_name: 'Bobmax75999205'} , function(error, tweets, response) {
//     if (!error){
//         var tweetslen = tweets.length;
//         for (i=0; i< 20 || i<tweets.length; i++){
//             if (tweets[i]){
//                 console.log("\nTweet #" +(i+1));
//                 console.log("created at: " + tweets[i].created_at);
//                 console.log(tweets[i].text);
//                 console.log("\nTweet #" +(i+1));
//                 console.log("created at: " + tweets[i].created_at);
//                 console.log(tweets[i].text);
//             }
//         }        
//     } else {
//         // console.log(error);
//         throw error;
//     }
//     });
// }

module.exports = twitter;

//twitter();


