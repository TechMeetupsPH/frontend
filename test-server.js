//for testing purposes
/**
 * How ot use:
 *
 * Start this server: node test-server.js
 * and run tests by firing up the frontend thing which connects to this local thing.
 * TOOD: secure with some kind of token - setup token with user when he logs in
 * User Signin: [POST] api/v1/user/login/{user_id}
 *
 * Event Signup: [GET] api/v1/event/{event_id}/join/{user_id} route with token
 * Event Unjoin: api/v1/event/{event_id}/unjoin/{user_id} route
*/
var restify = require('restify');

function respond(req, res, next) {
    if(req.params.token) {
      console.log(req.params.token);
     // res.send("hello " + req.params.user_id + " \r\n token: " + req.params.token);
      return;
    }
    res.send('hello ' + req.params.user_id);
    next();
}

var server = restify.createServer();
server.use(restify.plugins.queryParser({mapParams:true}));

server.get('/api/v1/event_signup/:user_id', respond);
server.head('/api/v1/:user_id', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});

