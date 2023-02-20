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
