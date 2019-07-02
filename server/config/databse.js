const db =  {
   production: false,
   CONFIG: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'homestead',
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_NAME || 'homestead'
  }
};
let knex = require('knex')({
  client: 'mysql',
  connection: {
    host : db.CONFIG.host
    user : db.CONFIG.usernam,
    password : db.CONFIG.password,
    database : db.config.database
  }
});

module.exports = knex;
