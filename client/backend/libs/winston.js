const { createLogger, format, transports, add } = require('winston');

module.exports = filename => {
  const myFormat = format.printf(({ timestamp, level, message, ...extra }) => {
    return `${timestamp} [client-service] [${level}] => ${JSON.stringify({
      message,
      extra,
      filename
    })}`;
  });
  const logger = createLogger({
    format: format.combine(
      format(info => {
        info.level = info.level.toUpperCase();
        return info;
      })(),
      format.timestamp({ format: 'dddd YYYY-DD-MM HH:mm:ss' }),
      myFormat
    ),
    transports: [
      new transports.Console({
        handleExceptions: true,
        level: 'debug',
        format: format.combine(format.colorize(), myFormat)
      }),
      new transports.File({
        filename: 'combined.log',
        level: 'info'
      }),
      new transports.File({
        filename: 'errors.log',
        level: 'error'
      })
    ]
  });
  return logger;
};
