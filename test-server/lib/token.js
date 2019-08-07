'use strict';
const knex = require('../config/db');
//This nodejs thing gets token from the usertokens for angular to simply use

/***
   *
   * If no username, then it means we are getting a simple api token (just generate general app_token)
   * 
**/
class Token {
   constructor( username ) { 
  
   if (username === undefined) {
        return process.env.APP_TOKEN;
    } 
    return _getUserToken(knex, username);
  }
 
   // Get token field, used to verify user is using correct token  
   _getUserToken(username) {
     knex('users')
       .select(token)
       .where({
         username: username
       })
       .then(function(result) {
         return result  
       });   
   } 
}

module.exports.token = token;
