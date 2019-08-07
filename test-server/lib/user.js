let crypto = require('crypto');
let jwt = require('jsonwebtoken');

let user =  {
  authenticate: function(email, password):  {
     //map to laravel api (backend)
    var sha256 = crypto.createHash('sha256')
                       .update(process.env.TMPH_CLIENT_KEY)
                       .digest('hex');
    var jsonDataObj = {
       'username': email, 
       'password': password
    };

    request.post({
       url: 'API_URL' + 'login/+'?token=' + sha256)
       body: jsonDataObj,
       json: true
    }).on('response', function(response) {
       var jwt = this.generateJWT(response.username);
    });
  },

  generateJWT: function(username) {
   var claims = {
     sub: username,
     iss: 'https://techmeetups.ph',
     permissions: 'signup, support'
   }
   

  }
}

module.exports.user = user; 
