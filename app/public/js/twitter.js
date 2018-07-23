var Twitter = require('twitter');

var client =  new Twitter({
    consumer_key: 'TEzUm4vR1m70YXhG4GCOsqmha',
    consumer_secret: 'pGzv0Vvn0CD5eYagjhfqag1B8aRCNr9stiH5A1s5Hg8pz6k7I8',
    access_token_key: '985525929861578753-TcjG7I8nmXFuMEZsyeKFY3WkzWRdqQy',
    access_token_secret: 'tvv0e4JYe9Ppyw9xN06mLmwty1ALgdUkQn6FLUVWabfZE'
  });



var twitter = {


    getTweets: function() {
        client.get('statuses/user_timeline',{ screen_name: 'DominicsNYPizz1'} , function(error, tweets, response) {
        if (!error){
            var tweetslen = tweets.length;
            for (i=0; i< 20 || i<tweets.length; i++){
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


