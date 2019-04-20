// @ts-ignore
import * as dotenv from 'dotenv';

dotenv.config();

const ENV:any = process.env;
const DEFAULT_SERVER_PORT = 8002;

interface configT {
  admin: {
    token: string;
  },
  mongodb: {
    host?: string;
    db: string;
  },
  server: {
    port: string;
  }
}

const config: configT = {
  admin: {
    token: ENV.ADMIN_TOKEN || '',
  },
  mongodb: {
    host: ENV.MONGO_HOST || '127.0.0.1',
    db: ENV.MONGO_DB || 'deviun_db',
  },
  server: {
    port: ENV.SERVER_PORT || DEFAULT_SERVER_PORT,
  },
};

export default config;
