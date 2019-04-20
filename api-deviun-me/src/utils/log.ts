import { DatadogLogger } from 'datadog-logger';
import config from '../../config/index';

const API_KEY = config.datadog.apiKey;

const log = new DatadogLogger({
  apiKey: API_KEY,
  logLevel: 'all',
  allowStdout: true,
  source: 'api-deviun-me',
  stdoutOnly: process.env.NODE_ENV !== 'production',
});

export default log;
