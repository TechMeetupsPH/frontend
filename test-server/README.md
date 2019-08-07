# README for the realtime participants server

This server is meant to be a way for interacting with pusher for participant signups, via nodejs, and push the signups into mongodb which then sends back success message through pusher to update the frontend in real time.

Technologies to be used: 

uuid - generate a unique signup key and store it into mongodb
node-http-pusher - for consuming pusher api
bunyan-mongodb-logger - my favorite logger to save the log as a json to mongodb.



