import winston, { Logger } from 'winston';
 
/**
 * Logger is created with the famous logger winston, 
 * so use .info('...') or .debug('...') or .error(...) and so on.
 * 
 * logger.error('qwerty')
 */
export const logger: Logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'info.log', level: 'info' }),
        new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
        new winston.transports.Console({level: 'silly'})
    ],
});
 
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;
export const log: Logger = logger