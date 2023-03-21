# ads-mylog

This is a personal logger based in the famous logging tool "winston". You can save time using this winston configuration.

## Intallation

```bash
npm install ads-mylog
```

## How to use

```js
// const { log } = require('ads-mylog') // only for Intellisense, comment before execute
const { log } = require('ads-mylog/dist/index')

log.error('logging error')
log.warn('logging warn')
log.info('logging info')
log.debug('logging debug')
```

or, with TypeScript:

```ts
import { log } from 'ads-mylog'

log.error('logging error')
log.warn('logging warn')
log.info('logging info')
log.debug('logging debug')
```

### Environment Configuration

This logger tool use the environment `ADS_MYLOG_CONSOLE_LEVEL` to setup the log level allowed in the console. All and only winston log levels are allowed. The default level is `warn`. 

You can set up the environment using the following command:

```bash
ADS_MYLOG_CONSOLE_LEVEL=debug npm start
```

## Contributions

It's an honor to receive any pull request from anyone.