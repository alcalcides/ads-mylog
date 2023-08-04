# ads-mylog

Ads-mylog is a pre-configured logger that is built on top of the popular Winston library with sensible defaults. It is designed for who don't have spare time to spend on massive logging details and configurations.

With ads-mylog, logging is simple and is ready to use. Simply install, import the logger and start logging! The rest is ready to get started.

## Intallation

```bash
npm install ads-mylog
```

## How to use

```js
const { log } = require('ads-mylog/lib/index')

log.error('logging error')
log.warn('logging warn')
log.info('logging info')
log.debug('logging debug')
```

or, with TypeScript:

```ts
import { log } from 'ads-mylog/lib/index'

log.error('logging error')
log.warn('logging warn')
log.info('logging info')
log.debug('logging debug')
```

### Version Control

The ads-mylog writes log data to the `logs` folder. To maintain a clean version history, it's strongly recommended not track log files. To exclude log files, add the folling line to the `.gitignore` file:

```.gitignore
logs/
```



### Environment Configuration

This logger tool relies on `ADS_MYLOG_CONSOLE_LEVEL` environment variable to determine the log level in the console. This variable accepts all Winston log levels and is set to `warn` by default. However, it's recommended to use `debug` level during development to gain more visibility or thrubleshooting. 

Follow one of the options to set up a log level:

1. Set the environment using the command prompt

Open the terminal and start your application passing the relevant variable as:

```bash
ADS_MYLOG_CONSOLE_LEVEL=debug npm start
```

You can use whatever npm script, like `npm run dev`. This will set the environment variable to debug for the duration of the npm start command.


2. Add the environment variable to the .env file.

Alternatively, you can add the ADS_MYLOG_CONSOLE_LEVEL variable straightforward to your .env file with the desired value:

```config
ADS_MYLOG_CONSOLE_LEVEL=debug
```

This will set the log level to debug for all commands and scripts in your application so it will be disposal to ads-mylog.

Remember to set the log level according to your needs and development environment to ensure you get the appropriate level of logging information.

## Contributions

It's an honor to receive any pull request from anyone.