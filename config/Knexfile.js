require('dotenv').config();

const knexConfig = {
  client: 'pg',
  connection: process.env.DATABASE_URL
    ? `${process.env.DATABASE_URL}?sslmode=require`  // Para producción (Render)
    : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      }, // Para desarrollo local
};

const knex = require('knex')(knexConfig);

module.exports = knex;




  