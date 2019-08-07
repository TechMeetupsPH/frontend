  // First, run 'npm install pusher'

var Pusher = require('pusher');

var sendMessage = function(channel, event, message) {
  //log to bunyan or something
  var pusher = new Pusher({
    appId: 'PUSHER_APP_ID',
    key: 'PUSHER_APP_KEY',
    secret: 'PUSHER_APP_SECRET',
    cluster: 'PUSHER_APP_CLUSTER'
  });

  pusher.trigger('my-channel', 'my-event', {"message": "hello world"});

};


