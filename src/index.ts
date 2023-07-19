import winston, { Logger, createLogger, format, transports } from "winston";

export const logsPath: string = "logs";

/**
 * Logger is created with the famous logger winston,
 * so use .info('...') or .debug('...') or .error(...) and so on.
 *
 * logger.error('qwerty')
 */
export const logger: Logger = createLogger({
  format: format.combine(
    format.timestamp({ format: () => new Date().toLocaleString() }),
    format.printf((info) => {
      return `${info.timestamp} [${info.level.toUpperCase()}] - ${info.message}\n`;
    })
  ),
  transports: [
    new transports.File({
      level: "error",
      filename: `${logsPath}/error_${new Date().toISOString()}.log`,
      format: format.json(),
      maxsize: 4096,
      maxFiles: 1,
    }),
    new transports.File({
      level: "debug",
      filename: `${logsPath}/debug_${new Date().toISOString()}.log`,
      format: format.json(),
      maxsize: 8192,
      maxFiles: 1,
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: `${logsPath}/exceptions_${new Date().toISOString()}.log`,
    }),
  ],
});

if (process.env.ADS_MYLOG_CONSOLE_LEVEL) {
  logger.add(
    new winston.transports.Console({
      level: String(process.env.ADS_MYLOG_CONSOLE_LEVEL),
    })
  );
} else {
  logger.add(
    new winston.transports.Console({
      level: "info",
    })
  );
}

export default logger;

/**
 * Shorter than logger (same feature).
 */
export const log: Logger = logger;
