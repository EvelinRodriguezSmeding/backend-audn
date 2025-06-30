require('dotenv').config();

const knexConfig = {
  client: 'pg',
  connection: process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    }
  : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    }

};

const knex = require('knex')(knexConfig);

module.exports = knex;


  