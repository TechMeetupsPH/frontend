# NOTES

Once a user logs in to the app (with the Laravel app), he should have a token assigned, which will allow him to do event signup, delisting, and contact the organizer.

## Todos:

 - Logged-in user can:
   - [ ] Create auth token in the database
   - [ ] Signup to an event (securely &ast;)
   - [ ] View his signups
   - [ ] Un-signup for an event he signed up for and maybe inform the organizer

## Additional Notes:
 - &ast; with validated user-created token
 
## Q: Why is there a test-server?

The test server is simply to be used as an API mock server for the real api which will run on the laravel app
