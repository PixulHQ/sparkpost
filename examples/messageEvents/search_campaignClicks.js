'use strict';

var key = 'YOURAPIKEY'
  , SparkPost = require('sparkpost')
  , client = new SparkPost(key)
  , searchParams = {
      events: 'click',
      campaign_ids: 'monday_mailshot'
    };

client.messageEvents.search(searchParams, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log('Congrats you can use our SDK!');
  }
});
