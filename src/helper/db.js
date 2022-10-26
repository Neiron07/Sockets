import * as knex from 'pg';
import config from '../config/config.js';

const db = new knex.Pool({
  user: config.database.USER_DB,
  password: config.database.PASSWORD_DB,
  host: config.database.HOST_DB,
  port: config.database.PORT_DB
});

await db.connect();



export {db};