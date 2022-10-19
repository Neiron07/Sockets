import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), 'config', '.env') });

const config = {
  api: {
    PORT_API: process.env.PORT_API,
  },
  database: {
    USER_DB: process.env.USER_DB,
    PASSWORD_DB: process.env.PASSWORD_DB,
    HOST_DB: process.env.HOST_DB,
    PORT_DB: process.env.PASSWORD_DB
  }
};

export default config;
