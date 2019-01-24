import * as bunyan from 'bunyan';
import {LoggingBunyan} from '@google-cloud/logging-bunyan';

const loggingBunyan = new LoggingBunyan();
const logger = bunyan.createLogger({
  name: 'my-service',
  level: 'info',
  streams: [
    {stream: process.stdout},
    loggingBunyan.stream('info'),
  ],
});

logger.error('warp nacelles offline');
logger.info('shields at 99%');
