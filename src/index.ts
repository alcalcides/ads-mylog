import winston, { Logger, createLogger, format, transports } from 'winston';



export const logsPath: string = "logs/"


/**
 * Logger is created with the famous logger winston, 
 * so use .info('...') or .debug('...') or .error(...) and so on.
 * 
 * logger.error('qwerty')
 */
export const logger: Logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.printf(info => {
            return `${info.timestamp} [${info.level.toUpperCase()}] - ${info.message}`;
        })
    ),
    transports: [
        new transports.File({ filename: `${logsPath}error.log`, level: 'error', format: format.json() }),
        new transports.File({ filename: `${logsPath}info.log`, level: 'info', format: format.json() }),
        new transports.File({ filename: `${logsPath}debug.log`, level: 'debug', format: format.json() }),
        new transports.Console({level: 'warn'})
    ],
});
 
if (process.env.ADS_MYLOG_CONSOLE_LEVEL) {
    logger.add(new winston.transports.Console({
        level: String(process.env.ADS_MYLOG_CONSOLE_LEVEL)
    }));
}

export default logger;
export const log: Logger = logger